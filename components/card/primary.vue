<template>
  <div class="transition_card shadow-lg cursor-pointer h-[510px] w-full bg-white flex flex-col rounded-lg">
    <img v-if="!post.video" class="min-h-[230px] h-[230px] w-full object-cover rounded-t-lg" :src="post.image" alt="" />
    <div v-else class="min-h-[230px] h-[230px]">
      <iframe v-if="isShowVideo" class="w-full h-full z-[99999]" :src="post.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div v-else class="h-full relative">
        <img class="h-full w-full object-cover rounded-t-lg" :src="post.image" alt="" />
        <img class="center cursor-pointer" src="/images/play.svg" alt=""
        @click="isShowVideo = true">
      </div>
    </div>
    <div class="p-6 h-full flex flex-col justify-between">
      <div class="flex flex-col gap-4">
        <p v-if="post.category" class="text-sm font-medium uppercase text-[#0048B7]">
          {{ post.category }}
        </p>
        <p class="block description text-lg font-semibold">
          {{ post.description }}
        </p>
      </div>
      <div class="flex justify-between text-[#6B7280] text-sm">
        <p>
          {{post.time}}
        </p>
        <p>
          {{post.date}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PrimaryCard',
  props: {
    post: {
      type: Object
    }
  },
  data() {
    return {
      isShowVideo: false
    }
  }
}
</script>
<style scoped>
.description {
  overflow: hidden;
	text-overflow: ellipsis;
  display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
}
</style>
