<template>
  <div class="my-6 pb-3 md:pb-0 rounded shadow-md w-full">
    <router-link class="block w-full" :to="`/campings/${data.hashids}`">
      <div class="md:flex w-full">
        <div
          class="h-48 w-full md:w-2/5 bg-center bg-cover rounded-t md:rounded-tr-none md:rounded-l"
          :style="`background-image: url('${image}')`"
        ></div>
        <div class="w-full md:w-3/5 p-3">
          <h3 class="text-xl font-semibold text-grey-900">
            {{ data.name }}
          </h3>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      image: require('@/assets/images/camping.jpg')
    }
  }
}
</script>
