<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .alert
    box-shadow: $box_shadow_normal
    display: flex
    margin-bottom: 1rem
    max-width: 100%
    padding: 1rem
    width: 20rem
    &:last-child
      margin-bottom: 0
    +variant('success')
      background-color: palette('Green')
    +variant('danger')
      background-color: palette('Red')
    +variant('warning')
      background-color: palette('Orange')
    +variant('info')
      background-color: palette('Light Blue')
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
    name: 'alert',

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
