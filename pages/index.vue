<template>
  <main
    v-touch:swipe="changeRouteOnSwipe"
    class="home"
    @mousewheel="goNextThrottle"
  >
    <div class="home__content">
      <h2 class="fw-400 mb-2">Hey, I'm Udit, a</h2>
      <h1 class="color-primary home__content__name">Web Developer.</h1>
      <h1 class="color-primary home__content__name">Programmer. Writer.</h1>

      <h2 class="home__content__head">I turn thoughts into binary || ink</h2>
      <div class="home__content__action">
        <button
          class="border-primary px-6 py-1 rounded fw-400 d-inline-flex-center"
          @click="buyMeABeer"
        >
          Buy Me a Beer <i class="icon-beer ml-1"></i>
        </button>
        <button
          class="border-primary px-9 py-1 rounded fw-400 ml-2"
          @click="$router.push('/contact')"
        >
          Say hello
        </button>
      </div>
    </div>
    <img class="home__image" :src="bannerImage" alt="Main Page Image" />
  </main>
</template>

<script>
import changeRouteOnScrollMixin from '~/changeRouteOnScrollMixin'
import headMixin from '~/headMixin'

const bannerPNG =
  'https://cdn.jsdelivr.net/gh/aedit/cdn-files@master/portfolio/images/main.png'
const bannerSVG =
  'https://cdn.jsdelivr.net/gh/aedit/cdn-files@master/portfolio/images/main.svg'

export default {
  mixins: [changeRouteOnScrollMixin, headMixin],
  data() {
    return {
      title: 'Hi, I am Udit Sen | Full-Stack Developer',
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
