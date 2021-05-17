<template>
  <div class="def-layout">
    <NavBar />
    <Nuxt />
    <span v-if="showScrollText" class="scroll-down">
      <i class="icon-arrow-left mr-2"></i> scroll down</span
    >
    <footer>
      <SocialIcons />
    </footer>
    <client-only>
      <Particles class="particles"></Particles>
    </client-only>
  </div>
</template>

<script>
import Particles from '@/components/Particles'
import NavBar from '@/components/NavBar'
import SocialIcons from '@/components/SocialIcons'

export default {
  components: { NavBar, SocialIcons, Particles },
  head() {
    return {
      title: 'Hello',
      link: [
        this.checkDark
          ? { rel: 'icon', type: 'image/x-icon', href: '/favicon-dark.png' }
          : { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
    }
  },
  computed: {
    showScrollText() {
      return this.$route.path === '/' || this.$route.path === '/projects'
    },
  },
  methods: {
    checkDark() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    },
  },
}
</script>

<style lang="scss">
.def-layout {
  height: 100%;
  width: 100%;

  .scroll-down {
    position: fixed;
    bottom: 2rem;
    transform: rotate(-90deg) translate(75%);
    display: flex;
    align-items: center;

    i {
      position: absolute;
      animation: move-down 1.5s infinite;
      left: -1rem;
    }
    @keyframes move-down {
      0% {
        transform: translate(0, 0);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: translate(-20px, 0);
        opacity: 0;
      }
    }
  }
}
</style>
