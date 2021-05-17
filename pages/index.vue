<template>
  <main class="home" @mousewheel="changeRoute">
    <div class="home__content">
      <h2 class="color-primary fw-400">Hello, I'm a</h2>
      <h1 class="home__content__head">Front-End Web Developer</h1>
      <h4 class="mb-6 fw-400">with 1 year of experience</h4>
      <div class="home__content__action">
        <button class="border-primary px-9 py-1 rounded fw-400 mr-2">
          Let's Talk
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
