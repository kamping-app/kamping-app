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
          <rantings
            :commemts="Math.floor(Math.random() * 50 + 5)"
            :stars="Math.floor(Math.random() * 5 + 1)"
          ></rantings>
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
      image: require('@/assets/images/camping.jpg')
    }
  }
}
</script>
