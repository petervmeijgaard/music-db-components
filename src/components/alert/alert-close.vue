<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .alert
    +has('close')
      color: palette('White')
      display: inline-flex
      margin-left: auto
      &:hover
        cursor: pointer
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
    name: 'alert-close',

    /**
     * The element name of the component.
     */
    element: 'close',

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
