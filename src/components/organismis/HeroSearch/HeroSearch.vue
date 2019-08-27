<template>
  <div
    class="h-64 md:h-96 bg-cover bg-center flex items-center justify-center p-3"
    :style="`background-image: url('${image}')`"
  >
    <div
      class="p-3 md:p-6 bg-gradient m-3 rounded shadow w-full max-w-sm mx-auto"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageName: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      image: require(`@/assets/images/hero-backgrounds/${this.imageName}`)
    }
  }
}
</script>

<style scoped>
.bg-gradient {
  background-color: rgba(40, 40, 40, 0.6);
}
</style>
