<template>
  <div class="transition_card w-full bg-white flex flex-col rounded-lg cursor-pointer"
  @click="clickPoster">
    <img class="min-h-[170px] h-[170px] w-full rounded-t-lg object-cover" height="170" :src="poster.image" :alt="poster.title" />
    <div class="py-4 sm:py-6 h-full flex flex-col">
      <div class="pb-[15px] border-b-[1px] border-dashed border-[#D7DADF]">
        <div class="px-4 sm:px-6">
          <p class="text-[#575F6C] font-medium text-sm">
            {{poster.event_date}}
          </p>
          <h2 class="title h-[60px] pt-3 font-bold">
            {{poster.title}}
          </h2>
        </div>
      </div>
      <div class="mt-4 flex flex-col gap-[6px] text-[#575F6C] text-sm px-4 sm:px-6">
       <p>
        {{poster.free == 0 ? 'Бесплатно' : poster.cost + ' ' + 'TJS'}}
       </p>
       <p>
        {{poster.address}}
       </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PosterCard',
  props: {
    poster: {
      type: Object,
      default: {}
    }
  },
  methods: {
    async clickPoster() {
      this.$router.push(this.localePath(`/poster/${this.poster.title}`))
      try {
        await this.$axios.get(`/web/poster/${this.poster.id}/click`) /* Увеличиваем счетчик афиш */
      } catch(err) {
        console.log(err);
      }
    }
  },
}
</script>
<style scoped>
.title {
  overflow: hidden;
	text-overflow: ellipsis;
  display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
</style>
