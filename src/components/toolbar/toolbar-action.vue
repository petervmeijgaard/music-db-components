<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .toolbar
    +has('action')
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
    name: 'toolbar-action',

    /**
     * The element name of the component.
     */
    element: 'action',

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
