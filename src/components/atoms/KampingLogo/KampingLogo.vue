<template>
  <img :src="logo" alt="Kamping logo" class="w-64 mx-auto mb-6" />
</template>

<script>
export default {
  name: 'kamping-logo',
  props: {
    logoSize: {
      type: String,
      default: 'medium'
    }
  },
  data() {
    return {
      logo: require('@/assets/images/kamping-logo.png')
    }
  }
}
</script>
