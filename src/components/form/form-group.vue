<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .form
    +has('group')
      margin-bottom: 1rem
      &:last-child
        margin-bottom: 0
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
    name: 'form-group',

    /**
     * The element name of the component.
     */
    element: 'group',

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
