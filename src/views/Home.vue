<template>
  <div class="home h-screen flex items-center">
    <div class="w-full max-w-md mx-auto px-2">
      <kamping-logo class=" mx-auto" />
      <p class="font-light text-grey-500 text-lg mb-2">
        {{ $t('search.findthebestplace') }}
      </p>
      <search-box class="flex justify-between" />
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
import KampingLogo from '@/components/atoms/KampingLogo'

import FeaturedCities from '../components/FeaturedCities'
import SearchBox from '@/components/molecules/SearchBox'

export default {
  name: 'home',
  components: {
    'kamping-logo': KampingLogo,
    'featured-cities': FeaturedCities,
    'search-box': SearchBox
  }
}
</script>
