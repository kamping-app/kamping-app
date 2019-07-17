<template>
  <ul class="mb-3">
    <li class="inline-block mr-1" v-for="(link, index) in links" :key="index">
      <generic-link size="sm" color="yellow-vivid-600" :path="`${link.url}`">
        {{ link.label }}
      </generic-link>
      <generic-text size="sm">&bull;</generic-text>
    </li>
    <li class="inline-block">
      <generic-text size="sm">{{ current }}</generic-text>
    </li>
  </ul>
</template>

<script>
import GenericText from '@/components/atoms/GenericText'
import GenericLink from '@/components/atoms/GenericLink'

export default {
  props: ['current', 'links'],
  components: {
    'generic-text': GenericText,
    'generic-link': GenericLink
  },
  methods: {
    firstItem(item) {
      if (item === 0) return 'pl-0'
    }
  }
}
</script>

<style lang="scss" scoped></style>
