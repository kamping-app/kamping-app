<template>
  <footer class=" bg-yellow-vivid-500">
    <wrapper>
      <router-link to="/">
        <img
          alt="Kamping logo"
          class="h-6"
          src="../assets/images/kamping-logo.png"
        />
      </router-link>
    </wrapper>
  </footer>
</template>

<script>
import Wrapper from '@/components/Wrapper'
export default {
  components: {
    wrapper: Wrapper
  }
}
</script>
