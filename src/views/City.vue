<template>
  <div class="about">
    <h1>Cidade: {{ cityName }}</h1>
    <div v-if="loading">Carregando dados</div>
    <div v-for="camping in campings" :key="camping.id">
      <a v-bind:href="'campings/' + camping.hashids">{{ camping.name }}</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['city'],
  data() {
    return {
      loading: false,
      cityName: null,
      campings: null
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
        .get(`http://127.0.0.1:3333/cities/${this.city}`)
        .then(res => {
          this.campings = res.data[0].campings
          this.cityName = res.data[0].name
          self.loading = false
        })
        .catch(e => console.error(e))
    }
  }
}
</script>
