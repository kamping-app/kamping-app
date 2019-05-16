<template>
  <header>
    <wrapper class="flex justify-between items-center">
      <router-link to="/">
        <img
          alt="Kamping logo"
          class="h-12"
          src="../assets/images/kamping-logo.png"
        />
      </router-link>
      <nav>
        <router-link to="/">Principais cidades</router-link>
        <router-link to="/">Blog</router-link>
        <router-link to="/">Login</router-link>
      </nav>
    </wrapper>
  </header>
</template>

<script>
import Wrapper from '@/components/Wrapper'
export default {
  components: {
    wrapper: Wrapper
  }
}
</script>
