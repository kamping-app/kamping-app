<template>
  <div>
    <ranting-stars :stars="stars"></ranting-stars>
  </div>
</template>

<script>
import RantingStars from '@/components/atoms/RantingStars'

export default {
  name: 'rantings',
  components: {
    'ranting-stars': RantingStars
  },
  props: {
    stars: {
      type: Number,
      default: 1
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
