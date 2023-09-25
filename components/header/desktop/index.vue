<template>
  <div class="main__container flex justify-between items-center text-sm xl:text-lg font-bold uppercase">
    <div class="flex items-center gap-[42px]">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')">
        <img class="min-w-[140px] min-h-[30px]" src="/images/logo.svg" alt="logo Your.tj">
      </NuxtLink>
      <!-- Block with social icons -->
      <div class="flex items-center gap-3.5">
        <a v-for="item in social" :key="item.id" :href="item.link" target="_blank">
          <svg fill="#6B7280" width="24" height="24">
            <use :xlink:href="'#' + item.svg"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="flex items-center gap-[45.5px]">
      <NuxtLink v-for="page in $t('links')" :key="page.id" :to="localePath(page.link)" class="transition"
      :class="$route.path.endsWith(page.link) ? 'text-[#0048B7]' : ''">
        {{page.text}}
      </NuxtLink>
    </div>
    <div class="flex items-center gap-10">
      <div class="flex gap-2">
        <NuxtLink :to="switchLocalePath(lang.locale)" v-for="lang in langs" :key="lang.id" class="transition"
        :class="$route.path.startsWith(lang.path) ? 'text-[#0048B7]' : ''">
          {{lang.text}}
        </NuxtLink>
      </div>
      <svg class="cursor-pointer" fill="black" width="24" height="24"
      v-if="!search.isShow"
      @click="showSearch">
        <use xlink:href="#search"/>
      </svg>
      <svg class="cursor-pointer" fill="black" width="24" height="24"
      v-else
      @click="closeSearch">
        <use xlink:href="#close"/>
      </svg>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      social: [
        {
          id: 1,
          svg: 'facebook',
          link: 'https://ru-ru.facebook.com/'
        },
        {
          id: 2,
          svg: 'instagram',
          link: 'https://www.instagram.com/'
        },
        {
          id: 3,
          svg: 'telegram',
          link: 'https://web.telegram.org'
        },
        {
          id: 4,
          svg: 'youtube',
          link: 'https://www.youtube.com/'
        },
      ],
      langs: [
        {
          id: 1,
          locale: "ru",
          path: '/ru',
          text: 'ru'
        },
        {
          id: 2,
          locale: "tj",
          path: '/tj',
          text: 'tj'
        },
        {
          id: 3,
          locale: "en",
          path: '/en',
          text: 'en'
        },

      ]
    }
  },
  computed: {
    ...mapState({
      search: state => state.search
    })
  },
  methods: {
    ...mapMutations({
      change_state: 'CHANGE_STATE'
    }),
    showSearch() {
      let payload = {
        key: 'search',
        body: {
          isShow: true
        }
      }
      this.change_state(payload)
    },
    closeSearch() {
      let payload = {
        key: 'search',
        body: {
          isShow: false
        }
      }
      this.change_state(payload)
    },
  },
}
</script>
<style scoped>
.transition {
  transition-duration: 150ms;
  transition-timing-function: linear;
  cursor: pointer;
}
.transition:hover {
  color: #0048B7;
}
</style>
