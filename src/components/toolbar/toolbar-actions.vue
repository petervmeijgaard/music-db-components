<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .toolbar
    +has('actions')
      color: palette('White')
      display: inline-flex
      font-size: 1.125rem
      font-weight: 400
      height: 4rem
      vertical-align: middle
      padding: 0.5rem
      margin: 0.75rem
      margin-left: auto
</style>

<template>
  <div :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </div>
</template>

<script>
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'toolbar-actions',

    /**
     * The element name of the component.
     */
    element: 'actions',

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
