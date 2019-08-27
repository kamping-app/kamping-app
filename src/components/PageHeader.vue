<template>
  <header class="border-b border-grey-100 py-4 bg-orange-100">
    <wrapper>
      <div class="flex flex-wrap justify-between items-center">
        <div class="sm:oder-1">
          <router-link to="/">
            <kamping-logo />
          </router-link>
        </div>
        <div class="sm:order-3">
          <div>
            <router-link
              class="bg-buttercup-500 py-2 px-3 uppercase tracking-wide block rounded text-xs text-buttercup-100 font-semibold"
              to="/login"
            >
              Login
            </router-link>
          </div>
        </div>
        <div class="w-full sm:flex-1 sm:order-2 mt-4 sm:mt-0 sm:ml-8">
          <nav class="flex justify-around sm:block text-sm">
            <router-link :class="classLink" to="/">
              Principais cidades
            </router-link>
            <router-link :class="classLink" to="/">
              Destaques
            </router-link>
            <router-link :class="classLink" to="/">
              Blog
            </router-link>
          </nav>
        </div>
      </div>
    </wrapper>
  </header>
</template>

<script>
import Wrapper from '@/components/Wrapper'
import KampingLogo from '@/components/atoms/KampingLogo'
export default {
  components: {
    wrapper: Wrapper,
    'kamping-logo': KampingLogo
  },
  data() {
    return {
      showMobileMenu: false,
      classLink: 'text-sm sm:text-base text-grey-700 sm:mr-4'
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
