<template>
  <div class="absolute top-0 left-0 w-full h-full bg-black/80 z-10 transition ease-linear duration-300 z-[9999999]"
  :class="burgerMenu.isSHow ? '' : '-translate-x-full'">
    <div class="w-[90%] h-full bg-white">
      <div class="flex items-center justify-between py-7 px-4">
        <p @click="goMainPage">
          <img class="min-w-[83px] min-h-[18px]" src="/images/logo.svg" alt="logo Your.tj">
        </p>
        <svg class="cursor-pointer" fill="black" width="24" height="24"
        @click="closeBurger">
          <use xlink:href="#closeBurger"/>
        </svg>
      </div>
      <div class="flex flex-col">
        <div class="py-2.5 border-t-[1px] border-[#D7DADF]">
          <div class="px-4 flex items-center gap-3.5">
            <svg fill="black" width="24" height="24">
              <use xlink:href="#search"/>
            </svg>
            <input type="text" class="w-full bg-[#E5E7EB] text-[#9CA3AF] font-medium py-0.5 px-2.5 border-[0.5px] border-[#9CA3AF] rounded-[3px]" placeholder="Найти">
          </div>
        </div>
        <div class="py-[25px] border-t-[1px] border-[#D7DADF]" v-for="page in $t('links')" :key="page.id">
          <div class="px-4 font-bold uppercase flex items-center gap-[15px]">
            <svg class="cursor-pointer" width="24" height="24">
              <use :xlink:href="'#' + page.icon"/>
            </svg>
            <p
            @click="changePage(page)">
              {{page.text}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'BurgerMenu',
  computed: {
    ...mapState({
      burgerMenu: state => state.burgerMenu
    }),
  },
  methods: {
    ...mapMutations({
      change_state: 'CHANGE_STATE'
    }),
    closeBurger() {
      let payload = {
        key: 'burgerMenu',
        body: {
          isShow: false
        }
      }
      this.change_state(payload)
    },
    changePage(page) {
      this.$router.push(this.localePath(page.link))
      this.closeBurger()
    },
    goMainPage() {
      this.$router.push(this.localePath('/'))
      this.closeBurger()
    }
  }
}
</script>
