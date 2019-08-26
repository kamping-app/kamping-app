<template>
  <input
    :type="inputType"
    :name="inputName"
    :id="inputId"
    class="form-input"
    :class="customClass"
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

    customClass: {
      type: String,
      default: undefined
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
