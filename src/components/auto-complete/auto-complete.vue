<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .auto-complete
    display: flex
    flex-direction: column
    position: relative
    width: 100%
</style>

<template>
  <div :class="classNames">
    <v-text-field
      v-model="query"
      :placeholder="placeholder"
      @keydown.esc.native="close"
    />
    <v-auto-complete-icon @click.native="onChange(query)" />

    <transition name="fade">
      <v-auto-complete-list v-if="isActive">

        <v-auto-complete-item
          v-if="items.length > 0"
          v-for="item in items"
          :key="item"
          @click.native="select(item)"
        >{{ item.content }}
        </v-auto-complete-item>

        <v-auto-complete-item
          v-if="notFound"
          variant="disabled"
        >Not found...
        </v-auto-complete-item>
      </v-auto-complete-list>
    </transition>
  </div>
</template>

<script>
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';

  export default {
    /**
     * The name of the component.
     */
    name: 'auto-complete',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      BlockMixin,
      ComponentMixin,
    ],

    /**
     * The properties that can be used.
     */
    props: {
      /**
       * The placeholder shown in the text field.
       */
      placeholder: {
        type: String,
        default() {
          return 'Search...';
        },
        required: false,
      },

      /**
       * The items displayed in the list.
       */
      items: {
        type: Array,
        required: true,
      },

      /**
       * The value selected.
       */
      value: {
        type: [String, Number, Object, Boolean],
        required: false,
      },
    },

    /**
     * The data of the component
     *
     * @returns {Object} The data.
     */
    data() {
      return {
        notFound: false,
        activatedThroughClick: false,
        isActive: false,
        query: null,
      };
    },

    /**
     * The methods which the component can use.
     */
    methods: {
      /**
       * Method used to close the auto complete popup.
       */
      close() {
        this.isActive = false;
      },

      /**
       * Method used to select an item from the auto complete list.
       */
      select(item) {
        this.$emit('input', item);
        this.isActive = false;
        this.activatedThroughClick = true;
        this.query = item.content;
      },

      /**
       * Method fired when the query has changed.
       */
      onChange(query) {
        this.isActive = true;
        this.$emit('change', query);
      },
    },

    /**
     * Available watchers for this component.
     */
    watch: {
      items(newValue) {
        if (newValue.length === 0) {
          this.notFound = true;
        }

        if (newValue.length > 0) {
          this.notFound = false;
        }
      },

      query(query) {
        if (!query) {
          this.isActive = false;
        }

        if (!this.activatedThroughClick && query) {
          this.onChange(query);
        }

        this.activatedThroughClick = false;
      },

      value(newValue) {
        this.activatedThroughClick = true;
        this.query = newValue.content;
      },
    },

    /**
     * The components that are being used.
     */
    components: {
      VAutoCompleteIcon: require('./auto-complete-icon.vue'),
      VAutoCompleteItem: require('./auto-complete-item.vue'),
      VAutoCompleteList: require('./auto-complete-list.vue'),
      VTextField: require('@/components/text-field').TextField,
    },
  };
</script>
