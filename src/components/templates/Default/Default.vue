<template>
  <div>
    <page-header />
    <slot />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'template-default',
  components: {
    'page-header': PageHeader,
    'page-footer': PageFooter
  }
}
</script>
