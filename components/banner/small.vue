<template>
  <div class="h-[510px] cursor-pointer rounded-md" @click="clickBanner">
    <img class="h-full w-full rounded-md" :src="banner.image" alt="Banner Your">
  </div>
</template>
<script>
export default {
  name: 'smallBanner',
  props: {
    banner: {
      type: Object,
      default: {}
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
