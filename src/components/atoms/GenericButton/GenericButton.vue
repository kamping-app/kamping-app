<template>
  <router-link
    class="bg-buttercup-400 text-base rounded border border-buttercup-400 py-2 px-4 text-grey-800 font-semibold"
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
