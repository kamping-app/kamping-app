<template>
  <div>
    <div>
      <label class="text-xs text-gray-400" for="search">{{
        $t('search.findthebestplace')
      }}</label>
      <generic-input
        input-id="search"
        input-name="search"
        :input-placeholder="$t('search.placeholder')"
      />
    </div>
    <div>
      <generic-button>
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
