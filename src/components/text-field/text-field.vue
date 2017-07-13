<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .text-field
    background-color: transparent
    border: none
    border-bottom: .0625rem solid palette('Grey')
    margin: 0
    outline: none
    font-size: 1rem
    padding: .5rem 0
    transition: border-bottom-color $transition_speed ease-in-out
    display: inline-flex
    vertical-align: middle
    &:focus
      border-bottom-color: palette('Green')
    +variant('block')
      display: flex
      width: 100%
      padding: .5rem 0
    +variant('with-signifier')
      flex-grow: 1
      flex-basis: 0
      margin-left: 2.5rem
      max-width: 100%
</style>

<template>
  <input
    :class="classNames"
    type="text"
    :value="value"
    @input="updateInput($event.target.value)"
  >
</template>

<script>
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';

  export default {
    /**
     * The name of the component.
     */
    name: 'text-field',

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
