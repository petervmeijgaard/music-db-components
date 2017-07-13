<style lang="stylus">
  .definition
    margin-bottom: -1rem
</style>

<template>
  <dl :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </dl>
</template>

<script>
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'definition',

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
