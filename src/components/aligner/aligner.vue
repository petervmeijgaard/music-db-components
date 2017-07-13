<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .aligner
    position: absolute
    +variant('top')
      top: 1rem
    +variant('right')
      right: 1rem
    +variant('bottom')
      bottom: 1rem
    +variant('left')
      left: 1rem
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
    name: 'aligner',

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
