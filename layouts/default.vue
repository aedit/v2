<template>
  <div class="main-layout">
    <Nuxt />
  </div>
</template>

<script>
export default {
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
.main-layout {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(45deg, #171717, #242424);
}
</style>
