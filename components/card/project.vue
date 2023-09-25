<template>
  <div class="transition_card cursor-pointer relative w-full h-[412px] rounded-md"
  @click="clickProject">
    <img class="w-full h-full rounded-md" :src="project.image" alt="">
    <div class="absolute top-0 left-0 w-full h-full z-10 shadow text-white flex flex-col justify-end rounded-md">
        <h2 class="text-base leading-5 font-semibold mb-12 mx-4">
          {{project.name}}
        </h2>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      default: {}
    }
  },
  methods: {
    async clickProject() {
      await this.$axios.get(`/web/special-project/${this.project.id}/click`) /* Увеличиваем счетчик спецпроектов */
      open(this.project.link) /* Направляем по ссылке */
    }
  }
}
</script>
<style scoped>
.shadow {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 23.44%, #000000 100%);
}
</style>
