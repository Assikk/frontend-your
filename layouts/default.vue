<template>
  <section class="relative bg-[#F9F9F9]">
    <BurgerMenu class="block lg:hidden"/>
    <!-- Component SVG Icons -->
    <Icons/>
    <intersect v-if="bannerA1.length > 0" @enter.once="viewBanner(bannerA1[idxA1])">
      <Banner class="hidden lg:block" :banner="bannerA1[idxA1]"/>
    </intersect>
      <Header/>
      <div class="main__container">
          <Nuxt class="pt-8 sm:pt-7 pb-[100px] sm:pb-[156px]"/>
      </div>
      <Footer/>
      <transition name="home">
        <Alert v-if="alert.isShow"/>
      </transition>
  </section>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
import Banner from '~/components/banner/index.vue'
import Header from '~/components/header/index.vue'
import Footer from '~/components/footer/index.vue'
import Icons from '@/components/icons.vue'
import BurgerMenu from '@/components/burgerMenu.vue'
import Alert from '@/components/alert.vue'
import Intersect from 'vue-intersect'
export default {
  components: {
    Banner,
    Header,
    Footer,
    Icons,
    BurgerMenu,
    Alert,
    Intersect
  },
  computed: {
    ...mapState({
      alert: state => state.alert,
    }),
    ...mapGetters({
      bannerA1: 'bannerA1',
      idxA1: 'idxA1',
    }),
  },
  methods: {
    async viewBanner(item) {
      await this.$axios.get(`/web/advertisement/${item.id}/view`)
    },
  }
}
</script>
