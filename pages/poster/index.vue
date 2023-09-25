<template>
  <div>
    <div v-if="isLoading">
      <h2 class="font-bold text-lg sm:text-[26px]">
        Афиша
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 sm:mt-6">
        <LoadingPoster v-for="num in 4" :key="num"/>
      </div>
      <LoadingSecondaryCard class="my-8"/>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <LoadingPhotoCard v-for="num in 2" :key="num"/>
      </div>
    </div>

    <div v-else class="flex flex-col gap-6">
      <div>
        <h2 class="font-bold text-lg sm:text-[26px]">
          Афиша
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 sm:mt-6">
          <Poster v-for="poster in posters.slice(0, 4)" :key="poster.id" :poster="poster.poster"
          @click="checkPoster(poster)"/>
        </div>
      </div>
      <SecondaryCard
      :post="news[3]"/>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 sm:mt-6">
        <Poster v-for="poster in posters.slice(4)" :key="poster.id" :poster="poster.poster"
        @click="checkPoster(poster)"/>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="h-[354px]" v-for="post in news.slice(6,8)" :key="post.id">
          <PhotoCard :post="post"/>
        </div>
      </div>
      <SecondaryCard
      :post="news[3]"/>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PrimaryCard :post="news[7]"/>
        <SmallBanner v-if="bannerB1.length > 0" :banner="bannerB1[idxB1]"/>
        <PrimaryCard :post="news[8]"/>
      </div>
      <div>
        <h2 class="font-bold text-lg sm:text-[26px]">
          Спецпроекты
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 sm:mt-6">
          <SpecialProject v-for="project in special_projects" :key="project.id" :project="project"/>
        </div>
      </div>
      <Banner v-if="bannerA2.length > 0" :banner="bannerA2[idxA2]"/>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PrimaryCard :post="news[7]"/>
        <SmallBanner v-if="bannerB2.length > 0" :banner="bannerB2[idxB2]"/>
        <PrimaryCard :post="news[8]"/>
      </div>
      <Banner v-if="bannerA3.length > 0" :banner="bannerA3[idxA3]"/>
      <!-- <div>
        <div class="flex items-center justify-between mb-6">
            <p class="font-bold text-lg sm:text-[26px]">
              Новости
            </p>
          <div class="hidden sm:flex gap-4 items-center">
            <svg class="cursor-pointer rotate-180" fill="black" width="32" height="32"
            @click="$refs.news.prev()">
              <use xlink:href="#arrow"/>
            </svg>
            <svg class="cursor-pointer" fill="black" width="32" height="32"
            @click="$refs.news.next()">
              <use xlink:href="#arrow"/>
            </svg>
          </div>
        </div>
        <div>
          <VueSlickCarousel v-bind="settings" ref="news">
            <div v-for="i in 12" :key="i">
              <Card :post="news[9]"/>
            </div>
          </VueSlickCarousel>
        </div>
      </div> -->
      <!-- <Banner :banner="banner"/>
      <div>
        <div class="flex items-center justify-between mb-6">
            <p class="font-bold text-lg sm:text-[26px]">
              Истории
            </p>
          <div class="hidden sm:flex gap-4 items-center">
            <svg class="cursor-pointer rotate-180" fill="black" width="32" height="32"
            @click="$refs.history.prev()">
              <use xlink:href="#arrow"/>
            </svg>
            <svg class="cursor-pointer" fill="black" width="32" height="32"
            @click="$refs.history.next()">
              <use xlink:href="#arrow"/>
            </svg>
          </div>
        </div>
        <div>
          <VueSlickCarousel v-bind="settings" ref="history">
            <div v-for="i in 12" :key="i">
              <Card :post="news[9]"/>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
      <Banner :banner="banner"/>
      <div>
        <div class="flex items-center justify-between mb-6">
            <p class="font-bold text-lg sm:text-[26px]">
              Подкасты
            </p>
          <div class="hidden sm:flex gap-4 items-center">
            <svg class="cursor-pointer rotate-180" fill="black" width="32" height="32"
            @click="$refs.history.prev()">
              <use xlink:href="#arrow"/>
            </svg>
            <svg class="cursor-pointer" fill="black" width="32" height="32"
            @click="$refs.history.next()">
              <use xlink:href="#arrow"/>
            </svg>
          </div>
        </div>
        <div>
          <VueSlickCarousel v-bind="settings" ref="history">
            <div v-for="i in 12" :key="i">
              <Card :post="news[2]"/>
            </div>
          </VueSlickCarousel>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Carousel from '@/components/carousel.vue'
import Card from '@/components/card/history.vue'
import Poster from '@/components/card/poster.vue'
import SecondaryCard from '@/components/card/secondary.vue'
import PhotoCard from '@/components/card/photo.vue'
import PrimaryCard from '@/components/card/primary.vue'
import SpecialProject from '@/components/card/project.vue'
import LoadingPoster from '@/components/card/loading/poster.vue'
import LoadingSecondaryCard from '@/components/card/loading/secondary.vue'
import LoadingPhotoCard from '@/components/card/loading/photo.vue'
export default {
  name: 'PosterPage',
  head: {
    title: 'Афиши'
  },
  components: {
    Carousel,
    Card,
    VueSlickCarousel,
    Poster,
    SecondaryCard,
    PhotoCard,
    PrimaryCard,
    SpecialProject,
    LoadingPoster,
    LoadingSecondaryCard,
    LoadingPhotoCard
  },
  computed: {
    ...mapState({
      news: state => state.news,
    }),
    ...mapGetters({
      bannerA2: 'bannerA2',
      idxA2: 'idxA2',
      bannerB1: 'bannerB1',
      idxB1: 'idxB1',
      bannerB2: 'bannerB2',
      idxB2: 'idxB2',
      bannerA3: 'bannerA3',
      idxA3: 'idxA3',
    })
  },
  data() {
    return {
      banner: {
        title: 'ADVERTISEMENT',
        image: '/images/news/10.webp'
      },
      settings: {
        "dots": false,
        "arrows": true,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "responsive": [
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
      },
      posters: [],
      special_projects: [], /* Переменная, хранит в себе массив спецпроектов */
      isLoading: true, /* Переменная хранит в себе статус загрузки страницы */
    }
  },
  methods: {
    ...mapActions({
      get_page: 'get_page'
    }),
    async get_poster() {
      let res = await this.$axios.get(`/web/posters?lang=${this.$i18n.locale}`)
      this.posters = res.data.data
      this.isLoading = false
    },
    async checkPoster(poster) { /* Функция клика по афише */
      try {
        await this.$axios.get(`/posters/${poster.poster.id}/click`) /* Увеличиваем счетчик */
        open(poster.poster.link) /* Направляем по ссылке */
      } catch(err) {
        console.log(err);
      }
    },
    get_banners() { /* Get запрос реклам */
      let payload = {
        request: '/web/advertisements',
        key: 'banners',
        body: []
      }
      this.get_page(payload)
    },
    async get_specialProjects() { /* Get запрос спец проектов */
      let res = await this.$axios.get(`/web/special-projects?lang=${this.$i18n.locale}`)
      this.special_projects = res.data.data
    },
  },
  mounted() {
    this.get_banners()
    this.get_poster()
    this.get_specialProjects()
  }
}
</script>
<style scoped>
@media screen and (min-width: 640px) {
  ::v-deep .slick-slide {
    padding: 0 12px;
  }
}
</style>
