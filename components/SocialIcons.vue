<template>
  <ul class="social-icons d-flex" :class="className">
    <li>
      <a href="https://facebook.com/udit.sen1" target="_blank">
        <i class="icon icon-facebook"></i>
      </a>
    </li>
    <li>
      <a href="https://instagram.com/agreyguy" target="_blank">
        <i class="icon icon-instagram"></i>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/aeditme" target="_blank">
        <i class="icon icon-twitter"></i>
      </a>
    </li>
    <li>
      <a href="https://github.com/aedit" target="_blank">
        <i class="icon icon-github"></i>
      </a>
    </li>
    <li>
      <a href="https://linkedin.com/in/aedit" target="_blank">
        <i class="icon icon-linkedin"></i>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  computed: {
    className() {
      return this.$route.path === '/contact' ? 'enlarge' : ''
    },
  },
}
</script>
