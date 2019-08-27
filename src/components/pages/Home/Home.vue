<template>
  <template-default>
    <hero-search image-name="10812152394_d7ea9a34d2_k.jpg">
      <search-box />
    </hero-search>
    <div class="w-full max-w-md mx-auto px-2">
      <featured-places :cities="dataCities" />
    </div>
  </template-default>
</template>

<script>
import TempladeDefault from '@/components/templates/Default'
import FeaturedCitiesData from '@/data/featured-cities.json'
import FeaturedPlaces from '@/components/organismis/FeaturedPlaces'
import HeroSearch from '@/components/organismis/HeroSearch'
import SearchBox from '@/components/molecules/SearchBox'

export default {
  name: 'home',
  components: {
    'template-default': TempladeDefault,
    'featured-places': FeaturedPlaces,
    'search-box': SearchBox,
    'hero-search': HeroSearch
  },
  data: function() {
    return {
      dataCities: FeaturedCitiesData
    }
  }
}
</script>
