<template>
  <div class="page-city">
    <wrapper>
      <loading v-if="loading"></loading>
      <breadcrumbs
        v-if="!loading"
        :links="[
          { label: city.country.name, url: `/${city.country.slug}` },
          {
            label: city.state.name,
            url: `/${city.country.slug}/${city.state.slug}/${city.state.hashids}`
          }
        ]"
        :current="city.name"
      />
    </wrapper>
    <wrapper class="flex justify-between" v-if="!loading">
      <generic-title tag="h1">{{ city.name }}</generic-title>
    </wrapper>
    <wrapper class="flex justify-between" v-if="!loading">
      <div class="w-full lg:w-3/5">
        <camping-card
          v-for="camping in city.campings"
          :data="camping"
          :key="camping.id"
        >
        </camping-card>
      </div>
      <div class="hidden lg:block lg:2/5">mapa</div>
    </wrapper>
  </div>
</template>

<script>
import CityService from '@/services/city.services'
import CampingCard from '@/components/molecules/CampingCard'
import Loading from '@/components/atoms/Loading'
import GenericTitle from '@/components/atoms/GenericTitle'
import Breadcrumbs from '@/components/molecules/Breadcrumbs'
import Wrapper from '@/components/Wrapper'

export default {
  props: ['city_slug', 'city_id'],
  components: {
    'camping-card': CampingCard,
    'generic-title': GenericTitle,
    breadcrumbs: Breadcrumbs,
    loading: Loading,
    wrapper: Wrapper
  },
  data() {
    return {
      loading: false,
      city: {
        name: null || '',
        campings: null,
        country: {
          name: '',
          slug: ''
        },
        state: {
          name: '',
          slug: '',
          hashids: ''
        }
      }
    }
  },
  mounted() {
    this.getCity()
  },
  methods: {
    getCity: function() {
      const _self = this
      _self.loading = true
      CityService.get(_self.city_id)
        .then(res => {
          _self.city = res.data[0]
          _self.loading = false
        })
        .catch(e => console.error(e))
    }
  }
}
</script>
