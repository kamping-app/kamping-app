<template>
  <router-link
    class="bg-yellow-vivid-500 py-2 px-4 text-grey-900 font-semibold"
    to="path"
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
    }
  }
}
</script>
