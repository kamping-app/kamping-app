<template>
  <span :class="[`text-${size}`, `text-${color}`]">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'generic-text',

  props: {
    // Texts size
    // [xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl]
    size: {
      type: String,
      default: 'base'
    },

    // Text color
    // const colors = [yellow-vivid, light-blue-vivid, grey, red-vivid, teal]
    // const variations = [050, 100, 200, 300, 400, 500, 600, 700, 800, 900]
    color: {
      type: String,
      default: 'black'
    }
  }
}
</script>
