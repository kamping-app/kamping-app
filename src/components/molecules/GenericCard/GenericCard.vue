<template>
  <div>
    <!-- Image -->
    <img v-if="!cardImageAsBackground" :src="image" alt="" />
    <!-- Image As Background -->
    <div
      v-if="cardImageAsBackground"
      class="h-48 w-full md:w-2/5 bg-center bg-cover rounded-t md:rounded-tr-none md:rounded-l"
      :style="`background-image: url('${image}')`"
    ></div>

    <!-- Title -->
    <generic-title v-if="cardTitle != null">
      {{ cardTitle }}
    </generic-title>

    <!-- Description -->
    <p v-if="cardContent != null">{{ cardContent }}</p>

    <!-- Call To Action -->
    <router-link v-if="cardCta != null" :to="cardCta">
      {{ cardCtaText }}
    </router-link>
  </div>
</template>

<script>
import GenericTitle from '@/components/atoms/GenericTitle'
export default {
  name: 'generic-card',
  components: {
    'generic-title': GenericTitle
  },
  props: {
    cardImageAsBackground: {
      type: Boolean,
      default: false
    },
    cardImage: {
      type: String,
      default: null
    },
    cardTitle: {
      type: String,
      default: null
    },
    cardContent: {
      type: String,
      default: null
    },
    cardCta: {
      type: String,
      default: null
    },
    cardCtaText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      image: require(`@/assets/images/${this.cardImage}`)
    }
  }
}
</script>

<style lang="scss" scoped></style>
