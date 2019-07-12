<template>
  <input
    :type="inputType"
    :name="inputName"
    :id="inputId"
    class="border border-grey-100  px-2 py-2 text-grey-500 text-lg font-light w-full"
    :placeholder="inputPlaceholder"
  />
</template>

<script>
export default {
  name: 'generic-input',
  props: {
    inputType: {
      type: String,
      default: 'text'
    },

    inputName: {
      type: String,
      default: 'input'
    },

    inputId: {
      type: String,
      default: 'input'
    },

    inputPlaceholder: {
      type: String,
      default: 'text'
    }
  }
}
</script>
