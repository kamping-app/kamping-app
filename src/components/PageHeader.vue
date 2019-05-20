<template>
  <header class="my-3">
    <wrapper class="flex justify-between items-center">
      <router-link to="/">
        <img
          alt="Kamping logo"
          class="h-12"
          src="../assets/images/kamping-logo.png"
        />
      </router-link>
      <button
        class="sm:hidden focus text-xs font-thin text-grey-500 border border-grey-300 py-1 px-3 rounded-full"
        v-on:click="toggleMobileMenu"
      >
        menu
      </button>
      <nav class="hidden sm:block">
        <router-link class="ml-4 text-lg text-grey-700" to="/"
          >Principais cidades</router-link
        >
        <router-link class="ml-4 text-lg text-grey-700" to="/"
          >Blog</router-link
        >
        <router-link class="ml-4 text-lg text-grey-700" to="/"
          >Login</router-link
        >
      </nav>
    </wrapper>

    <div v-show="showMobileMenu" class="absolute sm:hidden inset-0">
      <div
        class="h-screen  w-screen bg-yellow-vivid-050 flex items-center justify-center"
      >
        <div class="text-center">
          <img
            alt="Kamping logo"
            class="h-8 mx-auto"
            src="../assets/images/kamping-logo.png"
          />
          <nav class="my-8">
            <router-link class="block text-xl text-grey-500" to="/"
              >Principais cidades</router-link
            >
            <router-link class="block text-xl text-grey-500" to="/"
              >Blog</router-link
            >
            <router-link class="block text-xl text-grey-500" to="/"
              >Login</router-link
            >
          </nav>
          <button
            v-on:click="toggleMobileMenu"
            class="text-xs font-thin text-grey-500 border border-grey-300 py-1 px-3 rounded-full"
          >
            close
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Wrapper from '@/components/Wrapper'
export default {
  components: {
    wrapper: Wrapper
  },
  data() {
    return {
      showMobileMenu: false
    }
  },
  methods: {
    toggleMobileMenu() {
      console.log('as')
      if (this.showMobileMenu === true) {
        this.showMobileMenu = false
        return
      }
      this.showMobileMenu = true
    }
  }
}
</script>
