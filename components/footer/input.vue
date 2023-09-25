<template>
  <input type="text" class="shadow outline-0 border-[1px] border-[#D1D5DB] py-2 px-3 rounded-md text-[#6B7280]"
  placeholder="mail@example"
  :value="value"
  @input="$emit('input', $event.target.value)">
</template>
<script>
export default {
  name: 'InputFooter',
  props: ['value']
}
</script>
<style scoped>
.shadow {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
}
</style>
