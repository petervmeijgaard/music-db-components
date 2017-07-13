<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .auto-complete
    +has('list')
      background-color: palette('White')
      box-shadow: $box_shadow_minimum
      flex-direction: column
      justify-content: space-between
      width: 100%
      padding: .5rem 0
      position: absolute
      white-space: nowrap
      top: 2.25rem
      z-index: 999
</style>

<template>
  <ul :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </ul>
</template>

<script>
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'auto-complete-list',

    /**
     * The element name of the component.
     */
    element: 'list',

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
