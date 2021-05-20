<template>
  <div class="def-layout" :class="{ 'no-stars': !stars }">
    <NavBar />
    <Nuxt />
    <span :key="scrollText.up && scrollText.down" class="scroll-down">
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
export default {
  data() {
    return {
      stars: true,
    }
  },
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
