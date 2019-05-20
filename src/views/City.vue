<template>
  <div class="page-city">
    <wrapper>
      <h1 v-if="!loading" class="text-xl md:text-3xl font-bold text-grey-500">
        {{ city.name }}
      </h1>
      <div v-if="loading">Carregando dados..</div>
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
import axios from 'axios'
import CampingCard from '@/components/CampingCard'
import Wrapper from '@/components/Wrapper'

export default {
  props: ['city_slug', 'city_id'],
  components: {
    'camping-card': CampingCard,
    wrapper: Wrapper
  },
  data() {
    return {
      loading: false,
      city: {
        name: null || '',
        campings: null
      }
    }
  },
  mounted() {
    this.getCity()
  },
  methods: {
    getCity: function() {
      const self = this
      self.loading = true
      axios
        .get(`http://127.0.0.1:3333/cities/${this.city_id}`, {
          headers: {
            Authorization:
              'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU1Nzc1MDI4N30.2nG-uKrIp562NTCklQ3Mc7F--i2XQ7iBukN0FzbRUuA'
          }
        })
        .then(res => {
          this.city = res.data[0]
          self.loading = false
        })
        .catch(e => console.error(e))
    }
  }
}
</script>
