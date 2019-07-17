<template>
  <div class="my-6 pb-3 md:pb-0 rounded shadow-md w-full">
    <router-link class="block w-full" :to="`/campings/${data.hashids}`">
      <div class="md:flex w-full">
        <div
          class="h-48 w-full md:w-2/5 bg-center bg-cover rounded-t md:rounded-tr-none md:rounded-l"
          :style="`background-image: url('${image}')`"
        ></div>
        <div class="w-full md:w-3/5 p-3">
          <generic-title tag="h3">
            {{ data.name }}
          </generic-title>
          <!-- TODO: Remove These mock values  -->
          <rantings :user-comments="userComments" :stars="stars"></rantings>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import GenericTitle from '@/components/atoms/GenericTitle'
import Rantings from '@/components/molecules/Rantings'
export default {
  props: ['data'],
  components: {
    'generic-title': GenericTitle,
    rantings: Rantings
  },
  data() {
    return {
      stars: this.randonNumber(5, 1),
      userComments: this.randonNumber(50, 5),
      image: require('@/assets/images/camping.jpg')
    }
  },
  methods: {
    randonNumber: function(maxValue, begin) {
      return Math.floor(Math.random() * maxValue + begin)
    }
  }
}
</script>
