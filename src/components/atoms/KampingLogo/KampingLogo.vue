<template>
  <img :src="logo" :class="[`h-${height}`]" alt="Kamping logo" />
</template>

<script>
export default {
  name: 'kamping-logo',
  props: {
    height: {
      type: String,
      default: '12'
    }
  },
  data() {
    return {
      logo: require('@/assets/images/kamping-logo-icon.png')
    }
  }
}
</script>
