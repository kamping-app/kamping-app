<template>
  <div>
    <generic-input :input-placeholder="$t('search.placeholder')" />
    <generic-button>
      {{ $t('search.button') }}
    </generic-button>
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
