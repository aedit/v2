<template>
  <main class="home" @mousewheel="goNextThrottle">
    <div class="home__content">
      <h2 class="fw-400">Hello, I'm</h2>
      <h1 class="color-primary home__content__name">Udit Sen</h1>
      <h2 class="home__content__head mb-6">I turn thoughts into code!</h2>
      <div class="home__content__action">
        <button
          class="border-primary px-9 py-1 rounded fw-400 mr-2"
          @click="$router.push('/contact')"
        >
          Say hello
        </button>
        <button
          class="border-primary px-6 py-1 rounded fw-400 d-inline-flex-center"
          @click="buyMeABeer"
        >
          <i class="icon-beer-solid mr-2"></i> Buy Me a beer
        </button>
      </div>
    </div>
    <img class="home__image" :src="bannerImage" alt="Main Page Image" />
  </main>
</template>

<script>
import bannerSVG from '@/assets/images/main.svg'
import bannerPNG from '@/assets/images/main.png'
import changeRouteOnScrollMixin from '~/changeRouteOnScrollMixin'
import headMixin from '~/headMixin'
export default {
  mixins: [changeRouteOnScrollMixin, headMixin],
  data() {
    return {
      title: 'Hi, I am Udit',
    }
  },
  computed: {
    bannerImage() {
      return Math.floor(Math.random() * 100) & 2 ? bannerSVG : bannerPNG
    },
  },
  methods: {
    buyMeABeer() {
      window.open(
        'https://buymeacoffee.com/aedit',
        '_blank',
        'noopener noreferrer'
      )
    },
  },
}
</script>
