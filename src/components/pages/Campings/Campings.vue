<template>
  <Wrapper>
    <div v-if="!loading.camping">
      <Breadcrumbs
        :links="[
          { label: camping.country.name, url: `/${camping.country.slug}` },
          {
            label: camping.state.name,
            url: `/${camping.country.slug}/${camping.state.slug}/${camping.state.hashids}`
          },
          {
            label: camping.city.name,
            url: `/${camping.country.slug}/${camping.city.slug}/${camping.city.hashids}`
          }
        ]"
        :current="camping.name"
      />

      <GenericTitle>{{ camping.name }}</GenericTitle>
    </div>
    <Loading v-if="loading.camping" />
  </Wrapper>
</template>

<script>
import Loading from '@/components/atoms/Loading'

import GenericTitle from '@/components/atoms/GenericTitle'

import Breadcrumbs from '@/components/molecules/Breadcrumbs'

import Wrapper from '@/components/Wrapper'

import CampingService from '@/services/camping.services'

export default {
  name: 'page-camping',
  props: ['camping_id'],
  components: {
    Loading,
    Breadcrumbs,
    GenericTitle,
    Wrapper
  },
  data() {
    return {
      loading: {
        camping: false
      },
      camping: {
        name: '',
        address: null,
        lat: 0.0,
        lng: 0.0,
        claimed: 0,
        created_at: '',
        updated_at: '',
        hashids: '',
        country: {
          name: '',
          slug: ''
        },
        state: {
          name: '',
          slug: ''
        },
        city: {
          name: '',
          slug: '',
          hashids: ''
        }
      }
    }
  },
  mounted() {
    this.getCamping()
  },
  methods: {
    getCamping: function() {
      const _self = this
      _self.loading.camping = true
      CampingService.get(_self.camping_id)
        .then(res => {
          _self.camping = res.data[0]
          _self.loading.camping = false
        })
        .catch(e => console.error(e))
    }
  }
}
</script>

<style lang="scss" scoped></style>
