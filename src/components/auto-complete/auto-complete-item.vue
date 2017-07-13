<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .auto-complete
    +has('item')
      color: palette('Grey', '700')
      line-height: 1
      padding: 1rem
      transition: background-color $transition_speed ease-in-out
      &:hover
        background-color: palette('Grey', '200')
        cursor: pointer
      +variant('disabled')
        &:hover
          background-color: palette('White')
          cursor: not-allowed
</style>

<template>
  <li :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </li>
</template>

<script>
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'auto-complete-item',

    /**
     * The element name of the component.
     */
    element: 'item',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      ComponentMixin,
      ElementMixin,
      SlotMixin,
    ],
  };
</script>
