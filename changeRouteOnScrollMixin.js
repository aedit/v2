export default {
  methods: {
    changeRoute(e) {
      const isDownScroll = e.deltaY > 0
      switch (this.$route.path) {
        case '/':
          isDownScroll && this.$router.push('/about')
          break
        // case '/about':
        //   isDownScroll
        //     ? this.$router.push('/about/work')
        //     : this.$router.push('/')
        //   break
        // case '/about/work':
        //   isDownScroll
        //     ? this.$router.push('/about/skills')
        //     : this.$router.push('/about')
        //   break
        // case '/about/skills':
        //   isDownScroll
        //     ? this.$router.push('/projects')
        //     : this.$router.push('/about/work')
        //   break
      }
    },
  },
}
