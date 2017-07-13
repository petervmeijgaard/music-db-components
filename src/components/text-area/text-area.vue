<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .text-area
    background-color: transparent
    border: none
    border-bottom: .0625rem solid palette('Grey')
    display: inline-flex
    font-size: 1rem
    margin: 0
    max-width: 100%
    outline: none
    padding: .5rem 0
    transition: border-bottom-color $transition_speed ease-in-out
    vertical-align: middle
    width: 100%
    &:focus
      border-bottom-color: palette('Green')
</style>

<template>
  <textarea
    :class="classNames"
    :value="value"
    @input="updateInput($event.target.value)"
  ></textarea>
</template>

<script>
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';

  export default {
    /**
     * The name of the component.
     */
    name: 'text-area',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      BlockMixin,
      ComponentMixin,
    ],

    /**
     * The properties which the component can use.
     */
    props: {
      /**
       * The value displayed in the text box.
       */
      value: {
        type: String,
        required: false,
      },
    },

    /**
     * The methods which the component can use.
     */
    methods: {
      /**
       * This method will emit an event when the input has been updated.
       *
       * @param {*} value The value to be updated.
       */
      updateInput(value) {
        this.$emit('input', value);
      },
    },
  };
</script>
