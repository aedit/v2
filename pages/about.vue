<template>
  <div class="about">
    <div class="about__links">
      <NuxtLink to="/about">Me</NuxtLink>
      <NuxtLink to="/about/work">Work</NuxtLink>
      <NuxtLink to="/about/skills">Skills</NuxtLink>
    </div>
    <div class="about__content">
      <router-view class="about__route"></router-view>
      <button
        class="download-resume pointer px-6 py-1 rounded fw-400 border-primary"
        @click="openResume"
      >
        <span>
          <i class="icon-arrow-down"></i>
        </span>
        Resume
      </button>
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
