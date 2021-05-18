<template>
  <div class="def-layout">
    <NavBar />
    <Nuxt />
    <span class="scroll-down">
      <i v-if="scrollText.down" class="icon-arrow-left mr-2"></i>
      <span class="px-2">scroll</span>
      <i v-if="scrollText.up" class="icon-arrow-right ml-2"></i>
    </span>
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
    scrollText() {
      const scrollText = {}
      switch (this.$route.path) {
        case '/':
          scrollText.down = true
          break
        case '/projects':
        case '/about':
          scrollText.down = true
          scrollText.up = true
          break
        case '/contact':
          scrollText.up = true
      }
      return scrollText
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

    .icon-arrow-left {
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

    .icon-arrow-right {
      position: absolute;
      animation: move-up 1.5s infinite;
      right: -1rem;
    }
    @keyframes move-up {
      0% {
        transform: translate(0, 0);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: translate(20px, 0);
        opacity: 0;
      }
    }
  }
}
</style>
