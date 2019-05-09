<template>
  <div class="page-city">
    <router-link to="/">Home</router-link>
    <h1 class="text-3xl font-bold text-grey-500">{{ city.name }}</h1>
    <div v-if="loading">Carregando dados</div>
    <div v-for="camping in city.campings" :key="camping.id">
      <a
        class="text-light-blue-vivid-800 underline"
        v-bind:href="'campings/' + camping.hashids"
        >{{ camping.name }}</a
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['city_slug'],
  data() {
    return {
      loading: false,
      city: {
        name: null,
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
        .get(`http://127.0.0.1:3333/cities/${this.city_slug}`)
        .then(res => {
          this.city = res.data[0]
          self.loading = false
        })
        .catch(e => console.error(e))
    }
  }
}
</script>
