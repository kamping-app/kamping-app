<template>
  <router-link to="path" tag="button" class="generic-button">
    <!-- @slot for button text -->
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'generic-button',
  props: {
    path: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
