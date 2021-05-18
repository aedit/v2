export default {
  data() {
    return {
      goNext: () => {},
    }
  },
  mounted() {
    this.goNext = this.debounce(this.changeRoute, 1000, true)
  },
  methods: {
    changeRoute(e) {
      const isDownScroll = e.wheelDeltaY < 0
      switch (this.$route.path) {
        case '/':
          isDownScroll && this.$router.push('/about')
          return
        case '/about':
          isDownScroll ? this.$router.push('/projects') : this.$router.push('/')
          return
        case '/projects':
          isDownScroll
            ? this.$router.push('/contact')
            : this.$router.push('/about')
          return
        case '/contact':
          !isDownScroll && this.$router.push('/projects')
      }
    },
    debounce_call(func, timeout = 300) {
      let timer
      return (...args) => {
        if (!timer) {
          func.call(args)
        }
        clearTimeout(timer)
        timer = setTimeout(() => {
          timer = undefined
        }, timeout)
      }
    },
    debounce(func, wait = 1000, immediate = true) {
      let timeout
      return function executedFunction() {
        const context = this
        const args = arguments

        const later = function () {
          timeout = null
          if (!immediate) func.apply(context, args)
        }

        const callNow = immediate && !timeout

        clearTimeout(timeout)

        timeout = setTimeout(later, wait)

        if (callNow) func.apply(context, args)
      }
    },
  },
}
