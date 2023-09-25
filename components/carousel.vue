<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-end gap-4">
        <p class="font-bold text-lg sm:text-[26px]">
          {{title}}
        </p>
        <p class="hidden sm:block text-[#0048B7] font-medium">
          {{subTitle}}
        </p>
      </div>
      <div class="hidden sm:flex gap-4 items-center">
        <svg
        class="cursor-pointer rotate-180" fill="black" width="32" height="32"
        @click="$refs.carousel.prev()">
          <use xlink:href="#arrow"/>
        </svg>
        <svg class="cursor-pointer" fill="black" width="32" height="32"
        @click="$refs.carousel.next()">
          <use xlink:href="#arrow"/>
        </svg>
      </div>
    </div>
    <div>
      <VueSlickCarousel v-bind="settings" ref="carousel">
        <div v-for="i in 11" :key="i">
          <Post class="h-[400px]"
          v-if="title == 'Афиша'"/>
          <Project class="h-[412px]" v-else/>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Post from '@/components/card/poster.vue'
import Project from '@/components/card/project.vue'
export default {
  name: 'Carousel',
  components: {
    VueSlickCarousel,
    Post,
    Project
  },
  props: {
    title: {
      type: String
    },
    subTitle: {
      type: String
    }
  },
  data() {
    return {
      settings: {
        "dots": false,
        "arrows": false,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 4,
        "slidesToScroll": 3,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3,
            }
          },
          {
            "breakpoint": 768,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
            }
          },
          {
            "breakpoint": 640,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
            }
          },
        ]
      }
    }
  },
}
</script>
<style scoped>
@media screen and (min-width: 640px) {
  ::v-deep .slick-slide {
    padding: 0 12px;
  }
}
</style>
