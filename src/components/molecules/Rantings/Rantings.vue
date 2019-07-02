<template>
  <div>
    <ranting-stars :stars="stars"></ranting-stars>
    <generic-text size="sm">{{ userComments }}</generic-text>
  </div>
</template>

<script>
import RantingStars from '@/components/atoms/RantingStars'
import GenericText from '@/components/atoms/GenericText'

export default {
  name: 'rantings',
  components: {
    'generic-text': GenericText,
    'ranting-stars': RantingStars
  },
  props: {
    stars: {
      type: Number,
      default: 1
    },
    userComments: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped></style>
