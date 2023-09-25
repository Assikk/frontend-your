<template>
  <header class="main__container">
    <div class="flex justify-between">
      <svg class="cursor-pointer" fill="black" width="24" height="24"
      @click="openBurger">
        <use xlink:href="#openBurger"/>
      </svg>
      <NuxtLink :to="localePath('/')">
        <img class="min-w-[83px] min-h-[18px]" src="/images/logo.svg" alt="logo Your.tj">
      </NuxtLink>
      <div class="relative uppercase font-bold">
        <div class="flex items-center gap-[1px]"
        @click="isShowLangs = !isShowLangs">
          <p>
            {{activeLang}}
          </p>
          <svg fill="black" width="15" height="15">
            <use xlink:href="#arrowDown"/>
          </svg>
        </div>
        <transition name="home">
          <div v-if="isShowLangs" class="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col border-[1px] border-[#D1D5DB] z-10">
            <p class="text-center border-b-[0.5px] border-[#D1D5DB]" v-for="lang in langs" :key="lang.id"
            @click="changeLang(lang)">
                {{lang.text}}
            </p>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'MobileHeader',
  data() {
    return {
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
      ],
      isShowLangs: false,
      activeLang: null
    }
  },
  methods: {
    ...mapMutations({
      change_state: 'CHANGE_STATE'
    }),
    openBurger() {
      let payload = {
        key: 'burgerMenu',
        body: {
          isSHow: true
        }
      }
      this.change_state(payload)
    },
    changeLang(x) {
      this.$router.push(this.switchLocalePath(x.locale))
      this.isShowLangs = false
    },
    selectLang() {
        if(this.$route.path.startsWith('/en')) {
          this.activeLang = 'en'
        } else if(this.$route.path.startsWith('/tj')) {
          this.activeLang = 'tj'
        } else this.activeLang = 'ru'
      }
  },
  mounted() {
    this.selectLang()
  },
  watch: {
    '$route'() {
      this.selectLang()
    }
  }
}
</script>
