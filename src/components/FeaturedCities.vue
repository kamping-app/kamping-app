<template>
  <div class="flex flex-wrap justify-between">
    <div
      class="w-full my-2 border-t-4 border-yellow-vivid-500 lg:w-1/3 bg-grey-050 p-3"
      v-for="(city, index) in cities"
      :key="index"
    >
      <h3 class="text-2xl font-thin">{{ city.city }}</h3>
      <router-link
        class="underline"
        :to="`/cities/${city.slug}/${city.hashids}`"
        >Ver cidade</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['cities']
}
</script>
