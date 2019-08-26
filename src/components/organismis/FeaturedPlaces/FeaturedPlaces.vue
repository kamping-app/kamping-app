<template>
  <div class="flex flex-wrap">
    <generic-card
      class="w-full"
      :card-title="city.city"
      :card-image="city.image"
      :card-image-as-background="true"
      v-for="(city, index) in cities"
      :key="index"
    />
  </div>
</template>

<script>
import GenericCard from '@/components/molecules/GenericCard'
export default {
  name: 'featured-places',
  components: {
    'generic-card': GenericCard
  },
  props: {
    cities: {
      type: Array,
      default: undefined
    }
  }
}
</script>
