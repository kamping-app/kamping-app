<template>
  <div>
    <h1 class="" v-if="tag === 'h1'">
      {{ text }}
    </h1>

    <h2 class="" v-if="tag === 'h2'">
      {{ text }}
    </h2>

    <h3 class="md:text-xl font-semibold text-grey-900" v-if="tag === 'h3'">
      {{ text }}
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
