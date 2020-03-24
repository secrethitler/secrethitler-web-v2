<template>
  <div>
    <input
      v-bind="$attrs"
      v-on="$listeners"
      :type="type"
      @input="$emit('update', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
    event: 'update',
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  @apply block w-full bg-yellow-200 px-4 py-3 text-xl text-gray-700 border border-yellow-200;
  transition: all 0.3s ease;

  &:focus {
    @apply bg-white outline-none;
  }
}
</style>
