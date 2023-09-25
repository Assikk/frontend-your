<template>
  <div class="flex flex-col gap-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <History :post="news[9]"/>
      <History :post="news[9]"/>
      <History :post="news[9]"/>
    </div>
    <SecondaryCard
    :post="news[3]"/>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="h-[354px]" v-for="post in news.slice(6,8)" :key="post.id">
        <PhotoCard :post="post"/>
      </div>
    </div>
    <Banner :banner="banner"/>
    <div class="h-[354px] sm:h-[475px]">
      <PhotoCard :post="news[4]"/>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <History :post="news[9]"/>
      <History :post="news[9]"/>
      <History :post="news[9]"/>
    </div>
    <SecondaryCard
    :post="news[3]"/>
    <Banner :banner="banner"/>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <History class="h-[440px]" :post="news[9]"/>
      <img class="h-full w-full rounded-md h-[440px]" src="/images/news/10.webp" alt="">
      <History class="h-[440px]" :post="news[9]"/>
    </div>
    <div class="flex flex-col gap-3 items-center">
      <p class="font-semibold text-base sm:text-xl text-[#4B5563]">
        Показать еще
      </p>
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 4.16602C36.5 4.16602 45.8334 13.4993 45.8334 24.9993C45.8334 36.4993 36.5 45.8327 25 45.8327C13.5 45.8327 4.16669 36.4993 4.16669 24.9993C4.16669 13.4993 13.5 4.16602 25 4.16602ZM25 41.666C34.2084 41.666 41.6667 34.2077 41.6667 24.9993C41.6667 15.791 34.2084 8.33268 25 8.33268C15.7917 8.33268 8.33335 15.791 8.33335 24.9993C8.33335 34.2077 15.7917 41.666 25 41.666ZM27.0834 24.9993H33.3334L25 33.3327L16.6667 24.9993H22.9167V16.666H27.0834V24.9993Z" fill="#4B5563"/>
      </svg>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import PrimaryCard from '@/components/card/primary.vue'
import SecondaryCard from '@/components/card/secondary.vue'
import History from '@/components/card/history.vue'
import PhotoCard from '@/components/card/photo.vue'
export default {
  name: 'HistoryPage',
  components: {
    History,
    SecondaryCard,
    PhotoCard,
    PrimaryCard
  },
  computed: {
    ...mapState({
      news: state => state.news
    })
  },
  data() {
    return {
      banner: {
        title: 'ADVERTISEMENT',
        image: '/images/news/10.webp'
      }
    }
  }
}
</script>
