<template>
  <router-link
    class="rounded bg-buttercup-500 border border-buttercup-500 text-yellow-vivid-900 py-2 px-4 font-bold"
    :class="customClass"
    :to="to"
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
    to: {
      type: String,
      default: undefined
    },
    customClass: {
      type: String,
      default: undefined
    }
  }
}
</script>
