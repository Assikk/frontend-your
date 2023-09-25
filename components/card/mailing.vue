<template>
  <div class="w-full h-full bg-white border-[1px] border-[#E5E7EB] rounded-xl py-[42px] flex flex-col justify-between">
    <div>
      <img class="h-3 w-full" src="/images/blueLine.svg" alt="Blue Line">
    </div>
    <div class="h-full px-4 sm:px-6 pt-[52px] sm:pt-[29px] pb-[29px] sm:pb-[52px]">
      <p class="text-center uppercase font-bold text-lg sm:text-2xl">
        Будь в курсе
      </p>
      <p class="text-center py-2.5 sm:pt-4 sm:pb-10 font-medium sm:font-semibold">
        Не упустите главное - все лучшее за неделю в вашей почте!
      </p>
      <div class="flex flex-col gap-4">
        <input type="text" class="w-full bg-white shadow rounded-md border-[1px] border-[#D7DADF] text-[#BCC1C9] p-3 outline-0"
        placeholder="Ваш e-mail"
        :value="value"
        @input="$emit('input', $event.target.value)">
        <button class="w-full bg-black text-white py-3 uppercase font-semibold shadow rounded-md"
        @click="$emit('subscribe')">
          Хочу рассылку
        </button>
      </div>
    </div>
    <img class="h-3 w-full" src="/images/blueLine.svg" alt="Blue Line">
  </div>
</template>
<script>
export default {
  name: 'MailingCard',
  props: {
    value: {}
  }
}
</script>
<style scoped>
.shadow {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
}
</style>
