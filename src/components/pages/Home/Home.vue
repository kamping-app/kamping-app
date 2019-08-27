<template>
  <template-default>
    <hero-search image-name="10812152394_d7ea9a34d2_k.jpg">
      <search-box />
    </hero-search>
    <wrapper class="mt-8">
      <featured-places :cities="dataCities" />
    </wrapper>
  </template-default>
</template>

<script>
import Wrapper from '@/components/Wrapper'
import TempladeDefault from '@/components/templates/Default'
import FeaturedCitiesData from '@/data/featured-cities.json'
import FeaturedPlaces from '@/components/organismis/FeaturedPlaces'
import HeroSearch from '@/components/organismis/HeroSearch'
import SearchBox from '@/components/molecules/SearchBox'

export default {
  name: 'home',
  components: {
    wrapper: Wrapper,
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
