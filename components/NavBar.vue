<template>
  <nav class="nav-bar">
    <span class="nav-bar__logo pointer">
      <NuxtLink to="/">
        <span class="color-primary fw-600">UDIT</span> SEN
      </NuxtLink>
    </span>
    <ul class="nav-bar__links">
      <li><NuxtLink class="home-link" to="/"> Home</NuxtLink></li>
      <li><NuxtLink to="/about"> About</NuxtLink></li>
      <li><NuxtLink to="/projects"> Projects</NuxtLink></li>
      <li><NuxtLink to="/contact"> Contact</NuxtLink></li>
      <button
        class="download-resume pointer px-6 py-1 rounded fw-400 border-primary"
        @click="openResume"
      >
        <i class="icon-arrow-up"></i>

        Resume
      </button>
    </ul>
  </nav>
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
