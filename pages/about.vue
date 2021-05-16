<template>
  <div class="about">
    <div class="about__links">
      <ul ref="links-list">
        <li v-for="(item, index) in childLinks" :key="index" :ref="item.ref">
          <NuxtLink :to="item.route">{{ item.title }}</NuxtLink>
        </li>

        <span ref="selected-indicator" class="selected-indicator"></span>
      </ul>
      <button
        class="download-resume pointer px-6 py-1 rounded fw-400 border-primary"
        @click="openResume"
      >
        <i class="icon-arrow-up"></i>

        Resume
      </button>
    </div>
    <div class="about__content">
      <router-view class="about__route"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childLinks: [
        {
          ref: 'about-me',
          route: '/about',
          title: 'Me',
        },
        {
          ref: 'about-work',
          route: '/about/work',
          title: 'Work',
        },
        {
          ref: 'about-skills',
          route: '/about/skills',
          title: 'Skills',
        },
      ],
    }
  },
  watch: {
    $route() {
      this.$nextTick(() => this.resetIndicator())
    },
  },
  mounted() {
    this.resetIndicator()
  },
  methods: {
    resetIndicator() {
      const selectedIndicatorStyle = this.$refs['selected-indicator'].style
      const parentElement = this.$el.querySelector(
        '.nuxt-link-exact-active'
      ).parentElement
      selectedIndicatorStyle.top = parentElement.offsetTop + 'px'
      selectedIndicatorStyle.height = parentElement.clientHeight + 'px'
    },
    openResume() {
      window.open('/resume.pdf', '_blank')
    },
  },
}
</script>
