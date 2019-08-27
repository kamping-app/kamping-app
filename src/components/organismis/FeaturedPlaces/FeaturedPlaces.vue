<template>
  <div>
    <h2 class="mb-3 text-3xl font-thin tracking-wide">{{ $t('general.trending') }}</h2>
    <div class="flex flex-wrap">
      <div v-for="(city, index) in cities" :key="index" class="w-1/2 sm:w-1/3">
        <generic-card
          :card-title="city.city"
          :card-image="city.image"
          :card-image-as-background="true"
        />
      </div>
    </div>
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
