<template>
  <div class="projects">
    <div class="projects__container">
      <template v-for="i in 10">
        <div
          :id="i === 1 ? 'active' : ''"
          :key="'container' + i"
          class="image-container"
        >
          <img src="https://unsplash.it/1024" alt="" />
        </div>
        <div v-if="i < 10" :key="'filler' + i" class="filler"></div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // enter(event) {
    //   console.log(event)
    //   console.log('moving ', event.deltaY > 0 ? 'down' : 'up')
    //   const activeElement = this.$el.querySelector('#active')
    //   if (event.deltaY > 0) {
    //     const nextSibling = activeElement.nextSibling
    //     // const previousSibling = this.$el.querySelector('.active').previousSibling
    //     if (nextSibling) {
    //       activeElement.removeAttribute('id')
    //       nextSibling.id = 'active'
    //       nextSibling.scrollIntoView({ behaviour: 'smooth', block: 'start' })
    //     }
    //   } else {
    //     const previousSibling = activeElement.previousSibling
    //     if (previousSibling) {
    //       activeElement.removeAttribute('id')
    //       previousSibling.id = 'active'
    //       previousSibling.scrollIntoView({ behaviour: 'smooth' })
    //     }
    //   }
    //   console.log('hello', this.$el.querySelector('#active'))
    // },
  },
}
</script>
