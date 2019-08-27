<template>
  <div>
    <div class="w-full">
      <label class="text-sm uppercase text-white" for="search">{{
        $t('search.findthebestplace')
      }}</label>
      <generic-input
        input-id="search"
        input-name="search"
        custom-class="w-full"
        :input-placeholder="$t('search.placeholder')"
      />
    </div>
    <div class="w-full mt-3">
      <generic-button custom-class="w-full">
        {{ $t('search.button') }}
      </generic-button>
    </div>
  </div>
</template>

<script>
import GenericButton from '@/components/atoms/GenericButton'
import GenericInput from '@/components/atoms/GenericInput'

export default {
  name: 'search-box',
  components: {
    'generic-button': GenericButton,
    'generic-input': GenericInput
  }
}
</script>
