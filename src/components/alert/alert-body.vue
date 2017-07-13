<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .alert
    +has('body')
      color: palette('White')
      display: inline-flex
      font-weight: 500
      line-height: 1.5rem
      vertical-align: middle
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
    name: 'alert-body',

    /**
     * The element name of the component.
     */
    element: 'body',

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
