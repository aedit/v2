<template>
  <div class="projects" @mousewheel="goNextThrottle">New Projects Page</div>
</template>

<script>
import changeRouteOnScrollMixin from '~/changeRouteOnScrollMixin'
export default {
  mixins: [changeRouteOnScrollMixin],
}
</script>
