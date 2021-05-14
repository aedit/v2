<template>
  <div class="def-layout">
    <NavBar />
    <Nuxt />
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
}
</style>
