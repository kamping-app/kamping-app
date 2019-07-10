<template>
  <template-default>
    <div class="w-full max-w-md mx-auto px-2">
      <search-box class="flex justify-between items-end" />
      <featured-places :cities="dataCities" />
    </div>
  </template-default>
</template>

<script>
import TempladeDefault from '@/components/templates/Default'
import FeaturedCitiesData from '@/data/featured-cities.json'
import FeaturedPlaces from '@/components/organismis/FeaturedPlaces'
import SearchBox from '@/components/molecules/SearchBox'

export default {
  name: 'home',
  components: {
    'template-default': TempladeDefault,
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
