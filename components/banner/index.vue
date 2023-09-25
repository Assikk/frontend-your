<template>
  <div class="cursor-pointer h-[200px]"
  @click="clickBanner">
    <!-- the center class positions the element in the center (file assets/css/index.css) -->
    <div class="relative bg-black h-full text-white rounded-md">
      <img class="h-full w-full rounded-md" :src="banner.image" alt="Banner Your">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  props: {
    banner: {
      type: Object,
    }
  },
  methods: {
    async clickBanner() { /* Функция клика по рекламе */
      try {
        await this.$axios.get(`/web/advertisement/${this.banner.id}/click`) /* Увеличиваем счетчик клика рекламы */
        open(this.banner.link) /* Направляем по ссылке */
      } catch(err) {
        console.log(err);
      }
    }
  }
}
</script>
