<template>
  <main class="home" @mousewheel="goNext">
    <div class="home__content">
      <h2 class="fw-400">Hello, I'm</h2>
      <h1 class="color-primary home__content__name">Udit Sen</h1>
      <h2 class="home__content__head mb-6 color-primary">
        I create pages for the web!
      </h2>
      <div class="home__content__action">
        <button class="border-primary px-9 py-1 rounded fw-400 mr-2">
          Say hello
        </button>
        <button class="border-primary px-6 py-1 rounded fw-400">
          Buy Me a coffee
        </button>
      </div>
    </div>
    <img
      class="home__image"
      src="@/assets/images/main.png"
      alt="Main Page Image"
    />
  </main>
</template>

<script>
import changeRouteOnScrollMixin from '~/changeRouteOnScrollMixin'
export default {
  mixins: [changeRouteOnScrollMixin],
}
</script>
