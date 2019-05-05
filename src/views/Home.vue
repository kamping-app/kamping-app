<template>
  <div class="home h-screen flex items-center">
    <div class="w-full max-w-md mx-auto px-2">
      <img
        alt="Kamping logo"
        class="w-64 mx-auto mb-6"
        src="../assets/images/kamping-logo.png"
      />
      <p class="font-light text-grey-500 text-lg mb-2">
        Find the best campinground in...
      </p>
      <div class="flex justify-between">
        <input
          type="search"
          name="search"
          id="search"
          class="border border-grey-100  px-2 py-2 text-grey-500 text-lg font-light w-full"
          placeholder="anywhere"
        />
        <button
          class="bg-yellow-vivid-500 py-2 px-4 text-grey-900 font-semibold"
        >
          Find
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>
