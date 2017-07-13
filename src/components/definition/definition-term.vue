<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .definition
    +has('term')
      display: flex
      font-weight: 500
      margin-bottom: .125rem
      width: 100%
</style>

<template>
  <dd :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </dd>
</template>

<script>
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'definition-term',

    /**
     * The element name of the component.
     */
    element: 'term',

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
