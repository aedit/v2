<template>
  <div class="about" @mousewheel="goNextThrottle">
    <h1><span class="color-primary">Hello!</span></h1>
    <h2>
      I am a full stack web developer who enjoys reading and writing when he is
      not in front of the computer!
    </h2>
    <h3 class="mt-2">
      Challenge me for a game of
      <a title="Under Construction">
        <span class="color-primary">minesweeper</span>
      </a>
    </h3>
    <h3 class="mt-2">
      A collection of technologies, I have heard about:
      <div class="about-skills my-2">
        <span>C++</span><span>HTML</span><span>CSS</span><span>JavaScript</span
        ><span>Python</span><span>Vue.js</span><span>Nuxt.js</span
        ><span>Next.js</span><span>React</span><span>SCSS</span
        ><span>Bootstrap</span><span>Node.js</span><span>Express</span
        ><span>MongoDB</span>
      </div>
      (*and work on)
    </h3>
    <p class="mt-2">
      Catch up with my writings at:
      <a
        href="http://agreyguy.wordpress.com"
        target="_blank"
        rel="noopener noreferrer"
        class="color-primary"
        >agreyguy.wordpress.com</a
      >
    </p>
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
