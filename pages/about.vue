<template>
  <div class="about">
    <div class="about__links">
      <ul>
        <NuxtLink to="/about"><li>Me</li></NuxtLink>
        <NuxtLink to="/about/work"><li>Work</li></NuxtLink>
        <NuxtLink to="/about/skills"><li>Skills</li></NuxtLink>
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
  methods: {
    openResume() {
      window.open('/resume.pdf', '_blank')
    },
  },
}
</script>
