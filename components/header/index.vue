<template>
  <header>
    <div class="bg-white ">
      <div class="py-4 sm:py-6 border-b-2 border-[#D7DADF]">
        <!-- Header for Desktop -->
        <DesktopHeader class="hidden lg:flex"/>
        <!-- Header for Mobile -->
        <MobileHeader class="block lg:hidden"/>
      </div>
    </div>
    <Search :class="search.isShow ? 'visible' : 'invisible'" class="hidden sm:block"/>
  </header>
</template>
<script>
import {mapState} from 'vuex'
import DesktopHeader from './desktop/index.vue'
import MobileHeader from './mobile/index.vue'
import Search from './search.vue'
export default {
  name: 'Header',
  components: {
    DesktopHeader,
    MobileHeader,
    Search
  },
  computed: {
    ...mapState({
      search: state => state.search
    })
  }
}
</script>
