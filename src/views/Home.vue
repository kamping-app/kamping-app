<template>
  <div class="home h-screen flex items-center">
    <div class="w-full max-w-md mx-auto px-2">
      <img
        alt="Kamping logo"
        class="w-64 mx-auto mb-3"
        src="../assets/images/kamping-logo.png"
      />
      <p class="font-light text-grey-500 text-lg mb-2 text-center">
        Find the best campinground anywhere.
      </p>
      <hr class="border-b border-grey-200 my-6" />
      <div class="text-center">
        <h3 class="text-2xl text-grey-600">
          This project are under construction.
        </h3>
        <p class="my-2">
          But it's open source, feel free to contribute with the
          <a
            class=" underline"
            target="_blank"
            href="https://github.com/kamping-app/kamping-api"
            >API</a
          >
          or the
          <a
            class="underline"
            target="_blank"
            href="https://github.com/kamping-app/kamping-app"
            >WebApp</a
          >.
        </p>

        <p class="my-2">
          If you have any question, don't be shy and
          <a
            class="underline"
            href="https://t.me/vicainelli"
            target="_blank"
            title="Send me a message on Telegram"
            >ask me</a
          >
          something about this idea.
        </p>

        <p class="my-2">
          A soon as possible I'll publish a roadmap of this journey.
        </p>
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
