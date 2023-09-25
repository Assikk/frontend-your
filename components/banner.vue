<template>
  <div class="h-[200px]">
    <!-- the center class positions the element in the center (file assets/css/index.css) -->
    <div v-if="isShowBanner" class="relative bg-black h-full text-white rounded-md">
      <img class="h-full w-full rounded-md" :src="banner.image" :alt="banner.title">
      <p class="center font-bold text-base sm:text-3xl uppercase">
        {{banner.title}}
      </p>
    </div>
    <div v-else class="relative h-full w-full">
      <p class="center">
        Загрузка баннера...
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  props: {
    banner: {
      type: Object
    }
  },
  computed: {
    isShowBanner() {
      // if Banner don't have any keys then show loading block
      if(Object.keys(this.banner).length == 0) {
        return false
      } else return true
    }
  },
}
</script>
