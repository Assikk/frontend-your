<template>
<nuxt-link :to="localePath({ path: '/news/1'})"
v-if="post">
  <div v-if="post.isPhoto" class="h-[372px] sm:h-[214px] bg-white border-[1px] border-[#E5E7EB] rounded-xl flex flex-col sm:flex-row">
    <img :src="post.image" :alt="post.title"
    class="rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none min-h-[186px] sm:h-full w-full sm:w-[220px]">
    <div class="p-4 w-full h-full flex flex-col justify-between">
      <div class="flex flex-col h-full justify-start sm:justify-center">
        <h2 class="font-bold text-sm md:text-2xl">
          {{post.title}}
        </h2>
        <p class="hidden sm:block pt-[14px] overflow-hidden">
          {{post.description}}
        </p>
      </div>
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
  <div v-else class="w-full bg-white border-[1px] border-[#E5E7EB] p-8 rounded-xl flex flex-col gap-4">
    <p class="text-xs sm:text-sm uppercase text-[#6B7280]">
      {{post.category}}
    </p>
    <h2 class="text-sm sm:text-base md:text-[26px] md:leading-9 font-bold">
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
</nuxt-link>
</template>
<script>
export default {
  name: 'SecondaryCard',
  props: {
    post: {
      type: Object
    },
  }
}
</script>
