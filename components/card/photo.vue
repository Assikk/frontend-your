<template>
  <div class="relative h-full w-full rounded-md">
    <img class="block w-full h-full rounded-md" src="/images/boy.webp" alt="">
    <div class="absolute top-0 left-0 w-full h-full z-10 shadow text-white flex flex-col justify-end rounded-md">
      <div class="p-6 flex flex-col gap-3 sm:gap-4">
        <p class="uppercase text-xs sm:text-lg">
          {{post.category}}
        </p>
        <h2 class="text-sm sm:text-[26px] leading-9 font-bold">
          {{post.title}}
        </h2>
        <div class="flex gap-4 text-xs sm:text-lg">
          <p>
            {{post.time}}
          </p>
          <p>
            {{post.date}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PhotoCard',
  props: {
    post: {
      type: Object
    }
  }
}
</script>
<style scoped>
.shadow {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 23.44%, #000000 100%);
}
</style>
