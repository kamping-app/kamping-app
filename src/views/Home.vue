<template>
  <div class="home h-screen flex items-center">
    <div class="w-full max-w-md mx-auto px-2">
      <search-box class="flex justify-between items-end" />
      <featured-cities
        :cities="[
          {
            state: 'Minas Gerais',
            city: 'São Thomé das Letras',
            slug: 'sao-thome-das-letras',
            hashids: 'vY8qxN'
          },
          {
            state: 'São Paulo',
            city: 'Socorro',
            slug: 'socorro',
            hashids: 'vY8qxN'
          },
          {
            state: 'Minas Gerais',
            city: 'Extrema',
            slug: 'extrema',
            hashids: 'vY8qxN'
          }
        ]"
      />
    </div>
  </div>
</template>

<script>

import FeaturedCities from '../components/FeaturedCities'
import SearchBox from '@/components/molecules/SearchBox'

export default {
  name: 'home',
  components: {
    'featured-cities': FeaturedCities,
    'search-box': SearchBox
  }
}
</script>
