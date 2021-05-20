<template>
  <ul class="social-icons d-flex" :class="className">
    <li v-for="item in iconsList" :key="item.name">
      <a :href="item.link" target="_blank">
        <i :class="'icon-' + item.name"></i>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: 'facebook',
          link: 'https://facebook.com/udit.sen1',
        },
        {
          name: 'instagram',
          link: 'https://instagram.com/agreyguy',
        },
        {
          name: 'github',
          link: 'https://github.com/aedit',
        },
        {
          name: 'linkedin',
          link: 'https://linkedin.com/in/aedit',
        },
        {
          name: 'twitter',
          link: 'https://twitter.com/aeditme',
        },
      ],
    }
  },
  computed: {
    className() {
      return this.$route.path === '/contact' ? 'contact-page' : ''
    },
    iconsList() {
      return this.$route.path === '/contact'
        ? [{ name: 'mail', link: 'mailto:udisen97@gmail.com' }, ...this.list]
        : this.list
    },
  },
}
</script>
