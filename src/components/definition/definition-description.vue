<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .definition
    +has('description')
      display: flex
      line-height: 1.125rem
      margin-bottom: 1rem
      white-space: pre-wrap
      width: 100%
</style>

<template>
  <dt :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </dt>
</template>

<script>
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'definition-description',

    /**
     * The element name of the component.
     */
    element: 'description',

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
