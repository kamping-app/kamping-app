<template>
  <div class="flex flex-wrap">
    <!-- <div
      class="w-1/2 mx-3 border border-grey-800"
      v-for="(city, index) in cities"
      :key="index"
    >
      <h3 class="">{{ city.city }}</h3>
      <router-link
        class="underline"
        :to="`/cities/${city.slug}/${city.hashids}`"
        >Ver cidade</router-link
      >
    </div> -->
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
      default: null
    }
  }
}
</script>
