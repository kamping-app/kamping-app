<template>
  <router-link :class="[`text-${color}`, `text-${size}`]" to="path" tag="a">
    <!-- @slot for link text -->
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'generic-link',
  props: {
    path: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'grey-600'
    },
    size: {
      type: String,
      default: 'base'
    }
  }
}
</script>

<style lang="scss" scoped></style>
