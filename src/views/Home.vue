<template>
  <div class="home h-screen flex items-center">
    <div class="w-full max-w-md mx-auto px-2">
      <search-box class="flex justify-between items-end" />
      <featured-places :cities="dataCities" />
    </div>
  </div>
</template>

<script>
import FeaturedCitiesData from '@/data/featured-cities.json'
import FeaturedPlaces from '@/components/organismis/FeaturedPlaces'
import SearchBox from '@/components/molecules/SearchBox'

export default {
  name: 'home',
  components: {
    'featured-places': FeaturedPlaces,
    'search-box': SearchBox
  },
  data: function() {
    return {
      dataCities: FeaturedCitiesData
    }
  }
}
</script>
