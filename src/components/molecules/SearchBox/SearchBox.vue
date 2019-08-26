<template>
  <div class="flex my-4">
    <div class="flex-1">
      <label class="text-xs text-gray-400" for="search">{{
        $t('search.findthebestplace')
      }}</label>
      <generic-input
        input-id="search"
        input-name="search"
        custom-class="w-full rounded-r-none"
        :input-placeholder="$t('search.placeholder')"
      />
    </div>
    <div>
      <generic-button custom-class="rounded-l-none">
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
