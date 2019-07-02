<template>
  <div>
    <h1 class="text-xl md:text-3xl font-bold text-grey-500" v-if="tag === 'h1'">
      <slot />
    </h1>

    <h2 class="" v-if="tag === 'h2'">
      <slot />
    </h2>

    <h3 class="md:text-xl font-semibold text-grey-900" v-if="tag === 'h3'">
      <slot />
    </h3>
  </div>
</template>

<script>
export default {
  name: 'generic-title',
  props: {
    text: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: 'h1'
    }
  }
}
</script>
