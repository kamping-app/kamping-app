<template>
  <ul>
    <li class="inline-block mr-1" v-for="(star, index) in stars" :key="index">
      ⭐
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ranting-stars',
  props: {
    stars: {
      type: Number,
      default: 0
    }
  }
}
</script>
