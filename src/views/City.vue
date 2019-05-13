<template>
  <div class="page-city">
    <router-link to="/">Home</router-link>
    <div v-if="loading">Carregando dados</div>
    {{ loading }}
    <div v-if="!loading">
      <h1 v-if="!loading" class="text-3xl font-bold text-grey-500">
        {{ city.name }}
      </h1>
      <div v-for="camping in city.campings" :key="camping.id">
        <router-link
          class="text-light-blue-vivid-800 underline"
          :to="`/campings/${camping.hashids}`"
          >{{ camping.name }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['city_slug', 'city_id'],
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
