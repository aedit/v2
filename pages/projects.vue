<template>
  <div class="projects">
    <div class="projects__container">
      <template v-for="(project, index) in projects">
        <section
          :key="'container' + index"
          class="project-card"
          :class="{ left: index % 2 === 0 }"
        >
          <div class="project-card__content">
            <div class="content__image-container">
              <div class="content__image-container__middle">
                <div class="image-overlay"></div>
                <img :src="project.image" alt="" />
              </div>
            </div>
            <article class="content__text-container">
              <h1 class="content__text-container--head color-primary mb-5">
                <span class="color-secondary"> 0{{ index + 1 }}</span>
                <span
                  class="color-secondary"
                  :class="{ 'mr-2': index % 2 == 0, 'ml-2': index % 2 !== 0 }"
                  >.</span
                >
                {{ project.title }}
              </h1>
              <p class="content__text-container--description mb-4">
                {{ project.description }}
              </p>
              <div class="content__text-container--tech mb-3 color-primary">
                <span v-for="(tech, i) in project.techs" :key="i">
                  {{ tech }}
                </span>
              </div>
              <div class="content__text-container--actions">
                <i class="icon-github"></i>
                <i class="icon-github"></i>
              </div>
            </article>
          </div>
        </section>
        <div
          v-if="index < projects.length - 1"
          :key="'filler' + index"
          class="filler"
        ></div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'lorem Ipsum Dolor Amser',
          image: 'https://unsplash.it/1536/864',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, asperiores!',
          techs: [
            'Spotify Web API',
            'Firebase',
            'Next,js',
            'Nuxt.js',
            'Vue',
            'Google Developer Tools',
          ],
          githubURL: 'https://github.com/aedit',
          projectURL: 'https://aedit.github.io/old-portfolio',
        },
        {
          title: 'lorem Ipsum Dolor Amser',
          image: 'https://unsplash.it/1536/864',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, asperiores!',
          techs: [
            'Spotify Web API',
            'Firebase',
            'Next,js',
            'Nuxt.js',
            'Vue',
            'Google Developer Tools',
          ],
          githubURL: 'https://github.com/aedit',
          projectURL: 'https://aedit.github.io/old-portfolio',
        },
        {
          title: 'lorem Ipsum Dolor Amser',
          image: 'https://unsplash.it/1536/864',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, asperiores!',
          techs: [
            'Spotify Web API',
            'Firebase',
            'Next,js',
            'Nuxt.js',
            'Vue',
            'Google Developer Tools',
          ],
          githubURL: 'https://github.com/aedit',
          projectURL: 'https://aedit.github.io/old-portfolio',
        },
        {
          title: 'lorem Ipsum Dolor Amser',
          image: 'https://unsplash.it/1536/864',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, asperiores!',
          techs: [
            'Spotify Web API',
            'Firebase',
            'Next,js',
            'Nuxt.js',
            'Vue',
            'Google Developer Tools',
          ],
          githubURL: 'https://github.com/aedit',
          projectURL: 'https://aedit.github.io/old-portfolio',
        },
        {
          title: 'lorem Ipsum Dolor Amser',
          image: 'https://unsplash.it/1536/864',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, asperiores!',
          techs: [
            'Spotify Web API',
            'Firebase',
            'Next,js',
            'Nuxt.js',
            'Vue',
            'Google Developer Tools',
          ],
          githubURL: 'https://github.com/aedit',
          projectURL: 'https://aedit.github.io/old-portfolio',
        },
        {
          title: 'lorem Ipsum Dolor Amser',
          image: 'https://unsplash.it/1536/864',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, asperiores!',
          techs: [
            'Spotify Web API',
            'Firebase',
            'Next,js',
            'Nuxt.js',
            'Vue',
            'Google Developer Tools',
          ],
          githubURL: 'https://github.com/aedit',
          projectURL: 'https://aedit.github.io/old-portfolio',
        },
        {
          title: 'lorem Ipsum Dolor Amser',
          image: 'https://unsplash.it/1536/864',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, asperiores!',
          techs: [
            'Spotify Web API',
            'Firebase',
            'Next,js',
            'Nuxt.js',
            'Vue',
            'Google Developer Tools',
          ],
          githubURL: 'https://github.com/aedit',
          projectURL: 'https://aedit.github.io/old-portfolio',
        },
      ],
    }
  },
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
