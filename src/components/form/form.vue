<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .form
    display: flex
    flex-direction: column
    width: 100%
</style>

<template>
  <form :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </form>
</template>

<script>
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'form',

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
