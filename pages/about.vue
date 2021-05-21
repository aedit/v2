<template>
  <div class="about" @mousewheel="goNextThrottle">
    THello! My name is Udit, and I am a Web Developer. The first time I took an
    interest in the screens on the browser, was in 2010. I started experimenting
    things by 2018 and started taking it seriously since 2020. My major focus
    has always been UI Development, and recently I have started devoting some
    time to the backend side of the web. Currently, I work as a fulltime
    Software Engineer at Cyware Labs, where I develop the frontend of company's
    products. I love to take out some time to invest in open source projects,
    some exciting projects of mine and helping fellow developers around me.
    <br />
    Shows I love: Black Mirror, Bojack Horseman, Dark, Love, Death and Robots,
    Mindhunter, The Boys <br />
    Music I listen to: Prateek Kuhad, Anuv Jain,
    <br />
    Check out my writings here at: agreyguy.wordpress.com
    <br />
  </div>
</template>

<script>
import changeRouteOnScrollMixin from '~/changeRouteOnScrollMixin'
import headMixin from '~/headMixin'
export default {
  mixins: [changeRouteOnScrollMixin, headMixin],
  data() {
    return {
      title: 'About Me - aedit',
    }
  },
}
</script>
