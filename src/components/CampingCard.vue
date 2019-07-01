<template>
  <div class="my-6 pb-3 md:pb-0 rounded shadow-md w-full">
    <router-link class="block w-full" :to="`/campings/${data.hashids}`">
      <div class="md:flex w-full">
        <div
          class="h-48 w-full md:w-2/5 bg-center bg-cover rounded-t md:rounded-tr-none md:rounded-l"
          :style="`background-image: url('${image}')`"
        ></div>
        <div class="w-full md:w-3/5 p-3">
          <generic-title tag="h3" :text="data.name">
            {{ data.name }}
          </generic-title>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import GenericTitle from '@/components/GenericTitle/GenericTitle'
export default {
  props: ['data'],
  components: {
    'generic-title': GenericTitle
  },
  data() {
    return {
      image: require('@/assets/images/camping.jpg')
    }
  }
}
</script>
