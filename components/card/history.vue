<template>
  <div v-if="post" class="h-[372px] sm:h-[439px] flex flex-col bg-white rounded-md sm:rounded-lg border-[1px] border-[#D1D5DB] sm:border-none">
    <img v-if="!post.video" class="rounded-t-md sm:rounded-t-lg w-full min-h-[186px] sm:min-h-[192px]" src="/images/news/10.webp" alt="">
    <div v-else class="min-h-[186px] sm:min-h-[192px]">
        <iframe v-if="isShowVideo" class="w-full h-full z-[99999]" :src="post.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div v-else class="min-h-[186px] sm:min-h-[192px] relative">
          <img class="h-full w-full object-cover rounded-t-lg" :src="post.image" alt="" />
          <img class="center cursor-pointer" src="/images/play.svg" alt=""
          @click="isShowVideo = true">
        </div>
      </div>
    <div class="p-4 h-full flex flex-col justify-between">
      <h2 class="font-semibold text-sm sm:text-lg overflow-hidden">
        {{post.title}}
      </h2>
      <div class="flex justify-between text-[#6B7280] text-xs sm:text-sm">
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
  name: 'CardHistory',
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
