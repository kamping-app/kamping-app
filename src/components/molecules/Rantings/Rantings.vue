<template>
  <div>
    <ranting-stars :stars="stars"></ranting-stars>
    <generic-text size="sm">{{ textComments(comments) }}</generic-text>
  </div>
</template>

<script>
import RantingStars from '@/components/atoms/RantingStars'
import GenericText from '@/components/atoms/GenericText'

export default {
  name: 'rantings',
  components: {
    'ranting-stars': RantingStars,
    'generic-text': GenericText
  },
  props: {
    commemts: {
      type: Number,
      value: 1
    },
    stars: {
      type: Number,
      value: 1
    }
  },
  methods: {
    textComments: function() {
      const comments = this.commemts
      if (comments === 1) return `${comments} avaliação`
      return `${comments} avaliações`
    }
  }
}
</script>

<style lang="scss" scoped></style>
