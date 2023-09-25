<template>
<div class="absolute top-0 left-0 w-full h-full bg-black/50 z-[999999999] transition duration-150">
    <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[512px] bg-white shadow rounded-lg py-6">
      <div class="relative w-12 h-12  mx-auto rounded-full"
      :class="alert.type == 'success' ? 'bg-[#D1FAE5]' : alert.type == 'loaded' ? 'bg-[#F3F4F6]' : 'bg-[#FEE2E2]' ">
        <svg class="center" width="24" height="24">
          <use :xlink:href="alert.type == 'success' ? '#success' : alert.type == 'loaded' ? '#loaded' : '#error' "/>
        </svg>
      </div>
      <p class="mt-5 text-center font-medium text-lg">
        {{alert.msg}}
      </p>
    </div>
</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'Alert',
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  }
}
</script>
<style scoped>
.shadow {
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
