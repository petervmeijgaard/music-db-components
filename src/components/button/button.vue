<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .button
    background-color: palette('Blue')
    border-radius: .125rem
    box-shadow: $box_shadow_minimum
    color: palette('White')
    display: inline-flex
    font-size: 1rem
    font-weight: 500
    height: auto
    padding: .5rem 1.5rem
    text-align: center
    text-transform: uppercase
    &:hover
      cursor: pointer
    +variant('minimal')
      background-color: palette('White')
      box-shadow: none
      color: palette('Blue')
      margin-right: 1rem
      padding: 0
      &:last-child
        margin-right: 0
      +variant('danger')
        color: palette('Red')
    +variant('danger')
      background-color: palette('Red')
    +variant('success')
      background-color: palette('Green')
    +variant('block')
      display: block
      width: 100%
    +variant('circle')
      border-radius: 100%
      box-shadow: $box_shadow_normal
      padding: 1rem
</style>

<template>
  <div :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </div>
</template>

<script>
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'button',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      BlockMixin,
      ComponentMixin,
      SlotMixin,
    ],
  };
</script>
