<template>
  <button class="shadow py-2 px-4 border-[1px] border-[#0048B7] bg-[#0048B7] rounded-md font-medium"
  @click="$emit('click')">
    {{$t('footer.subscribe')}}
  </button>
</template>
<script>
export default {
  name: 'ButtonFooter'
}
</script>
<style scoped>
.shadow {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
}
</style>
