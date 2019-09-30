<template>
  <router-link
    class="button"
    :to="path"
    :class="customClass"
    tag="button"
  >
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
    },
    customClass: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style lang="css" scoped>
.button {
  background-color: #F0B429;
  border: 1px solid #F0B429;
  border-radius: .25rem;
  color: #8D2B0B;
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 1rem;
  padding: .5rem 1rem;
  font-weight: 600
}
</style>