<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .auto-complete
    +has('icon')
      color: palette('Grey', '600')
      position: absolute
      display: inline-flex
      right: .25rem
      top: .25rem
      text-align: end
      &:hover
        cursor: pointer
</style>

<template>
  <v-icon :class="classNames">
    search
  </v-icon>
</template>

<script>
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'auto-complete-icon',

    /**
     * The element name of the component.
     */
    element: 'icon',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      ComponentMixin,
      ElementMixin,
      SlotMixin,
    ],

    /**
     * The components that are being used.
     */
    components: {
      VIcon: require('@/components/icon').Icon,
    },
  };
</script>
