<template>
  <div class="projects" @mousewheel="throttleScroll">
    <nav class="projects__nav">
      <div class="projects__nav__list-container">
        <ul class="projects__nav__list">
          <li
            v-for="(project, index) in projects"
            :key="index"
            :class="{ 'active-item': project.selected }"
            @click="selectItem(index)"
          >
            {{ project.title }}
          </li>
          <span
            ref="list-selected-indicator"
            class="list-selected-indicator"
          ></span>
        </ul>
      </div>
      <button
        class="archives-button"
        @click="$router.push('/project-archives')"
      >
        Archives
      </button>
    </nav>
    <main class="projects__main">
      <transition name="fade">
        <div v-if="showingSelectedProject" class="projects__container">
          <img class="projects__image" :src="base64" alt="" />
          <div class="projects__content">
            <a
              :href="selectedProject.projectURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 class="projects__content--title mb-3">
                {{
                  getProjectTitle(selectedProject.number, selectedProject.title)
                }}
              </h1>
            </a>
            <p class="projects__content--description mb-2">
              {{ selectedProject.description }}
            </p>
            <div class="projects__content--techs mb-3">
              <span v-for="(item, index) in selectedProject.techs" :key="index">
                {{ item }}
              </span>
            </div>
            <div class="projects__content--actions">
              <a
                :href="selectedProject.githubURL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="icon-github mr-3"></i>
              </a>
              <a
                :href="selectedProject.projectURL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="icon-github"></i>
              </a>
            </div>
          </div>
        </div>
      </transition>
    </main>
  </div>
</template>

<script>
import projects from '~/assets/scripts/projects'
import base64 from '~/assets/scripts/image-base64'
import changeRouteOnScrollMixin from '~/changeRouteOnScrollMixin'
export default {
  mixins: [changeRouteOnScrollMixin],
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (from.path === '/contact') vm.defaultIndex = vm.lastProjectIndex
    })
  },
  data() {
    return {
      projects,
      base64,
      showingSelectedProject: false,
      throttleScroll: () => {},
      throttleSelect: () => {},
      defaultIndex: 0,
    }
  },
  computed: {
    selectedProject() {
      return {
        number: this.selectedProjectIndex + 1,
        ...this.projects.find((el) => el.selected),
      }
    },
    selectedProjectIndex() {
      return this.projects.findIndex((el) => el.selected)
    },
    lastProjectIndex() {
      return this.projects.length - 1
    },
  },
  mounted() {
    this.selectItem(this.defaultIndex, true)
    this.throttleSelect = this.throttle(this.selectItem)
    this.throttleScroll = this.throttle(this.checkScroll)
  },
  methods: {
    selectItem(index, skipCheck = false) {
      const prevSelectedIndex = this.selectedProjectIndex
      if (!skipCheck && index === prevSelectedIndex) return

      this.showingSelectedProject = !this.showingSelectedProject
      projects.forEach((el) => this.$set(el, 'selected', false))
      this.$set(projects[index], 'selected', true)
      this.$nextTick(() => {
        const selectedIndicator = this.$refs['list-selected-indicator']
        const selectedItem = this.$el.querySelector(
          '.projects__nav__list .active-item'
        )
        const offsetTop = selectedItem.offsetTop
        const clientHeight = selectedItem.clientHeight
        selectedIndicator.style.top = offsetTop + 'px'
        selectedIndicator.style.height = clientHeight + 'px'
        setTimeout(() => {
          this.showingSelectedProject = true
        }, 500)
      })
    },
    getProjectTitle(num, title) {
      return '0' + num + '.\n' + title
    },
    checkScroll(e) {
      const isDownScroll = e.wheelDeltaY < 0

      if (
        (isDownScroll && this.selectedProjectIndex === this.lastProjectIndex) ||
        (!isDownScroll && this.selectedProjectIndex === 0)
      ) {
        this.goNextThrottle(e)
        return
      }
      this.throttleSelect(this.selectedProjectIndex + (isDownScroll ? 1 : -1))
    },
  },
}
</script>
