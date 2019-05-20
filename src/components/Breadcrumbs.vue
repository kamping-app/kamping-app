<template>
  <ul class="mb-3">
    <li
      class="inline-block text-xs  text-grey-400"
      v-for="(link, index) in links"
      :key="index"
    >
      <router-link class="text-yellow-vivid-600" :to="`${link.url}`">{{
        link.label
      }}</router-link
      ><span class="mx-1">&bull;</span>
    </li>
    <li class="inline-block text-grey-600 text-xs">{{ current }}</li>
  </ul>
</template>

<script>
export default {
  props: ['current', 'links'],
  methods: {
    firstItem(item) {
      if (item === 0) return 'pl-0'
    }
  }
}
</script>

<style lang="scss" scoped></style>
