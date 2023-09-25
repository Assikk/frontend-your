<template>
<div class="bg-white">
  <div class="main__container">
    <div class="py-[18px] flex justify-between">
      <input type="text" class="w-full py-2 px-3 outline-0 bg-[#E5E7EB] rounded-l-[10px] text-[#6B7280] font-semibold"
      :placeholder="$t('search') + '...'">
      <div class="relative bg-[#6B7280] rounded-r-[10px] w-[72px] cursor-pointer">
        <svg class="center" fill="#fff" width="24" height="24">
          <use xlink:href="#search"/>
        </svg>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'Search',
  computed: {
    ...mapState({
      search: state => state.search
    })
  }
}
</script>
