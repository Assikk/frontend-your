<template>
  <div>
    <div class="flex items-center gap-4 font-medium text-sm sm:text-base">
      <NuxtLink :to="localePath('/')">
        Главная
      </NuxtLink>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.9767 10.0001L6.85168 5.87511L8.03002 4.69678L13.3334 10.0001L8.03002 15.3034L6.85168 14.1251L10.9767 10.0001Z" fill="black"/>
      </svg>
      <p>
        Связаться с нами
      </p>
    </div>
    <h1 class="my-4 sm:my-8 text-lg sm:text-[26px] font-bold">
      Связаться с нами
    </h1>
    <div class="flex flex-wrap gap-[18px] lg:gap-12 items-center text-sm sm:text-lg font-semibold">
      <div class="flex gap-[18px] items-center">
        <svg fill="none" class="h-5 sm:h-10 w-5 sm:w-10">
          <use xlink:href="#mail"/>
        </svg>
        <a href="mailto:admin@your.tj" target="_blank">admin@your.tj</a>
      </div>
      <div class="flex gap-[18px] items-center">
        <svg fill="none" class="h-5 sm:h-10 w-5 sm:w-10">
          <use xlink:href="#phone"/>
        </svg>
        <a href="tel:+992 935 71 00 56" target="_blank">+992 935 71 00 56</a>
      </div>
      <div class="flex gap-[18px] items-center">
        <svg fill="none" class="h-5 sm:h-10 w-5 sm:w-10">
          <use xlink:href="#phone"/>
        </svg>
        <a href="tel:+992 935 76 55 56" target="_blank">+992 935 76 55 56</a>
      </div>
      <div class="flex gap-[18px] items-center">
        <svg fill="none" class="h-5 sm:h-10 w-5 sm:w-10">
          <use xlink:href="#location"/>
        </svg>
        <a href="https://www.google.com/maps/place/%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%90%D0%B9%D0%BD%D0%B8+16+%D0%91,+%D0%94%D1%83%D1%88%D0%B0%D0%BD%D0%B1%D0%B5+734000,+%D0%A2%D0%B0%D0%B4%D0%B6%D0%B8%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@38.5624722,68.7896702,17z/data=!3m1!4b1!4m6!3m5!1s0x38b5d140c3640001:0x3d1eb29408dca924!8m2!3d38.562468!4d68.7918589!16s%2Fg%2F11td_x2rbs"
        target="_blank">
          Таджикистан, город Душанбе, улица Айни 16 Б.
        </a>
      </div>
    </div>
    <h2 class="mt-8 sm:mt-16 mb-4 sm:mb-8 font-semibold text-sm sm:text-[22px]">
      Остались вопросы? Заполните форму и мы свяжемся с вами в ближайшее время!
    </h2>
    <form @submit.prevent="connect">
      <div class="grid grid-cols gap-6">
        <!-- <div class="grid grid-cols gap-1">
          <div class="flex items-center justify-between">
            <label class="label" for="surname">Представьтесь*</label>
          </div>
          <input type="text" id="surname" class="input" placeholder="Представьтесь*">
        </div> -->
        <input class="w-full md:w-1/2 input" type="text" id="surname" placeholder="Представьтесь*">
        <!-- <div class="grid grid-cols gap-1">
          <div class="flex items-center justify-between">
            <label class="label" for="theme">Оставьте ваш телефон или почту*</label>
          </div>
          <input type="text" id="theme" class="input" placeholder="Оставьте ваш телефон или почту*">
        </div> -->
        <input class="w-full md:w-1/2 input" type="text" id="theme" placeholder="Оставьте ваш телефон или почту*">
        <!-- <div class="grid grid-cols gap-1">
          <div class="flex items-center justify-between">
            <label class="label" for="message">Текст сообщения</label>
            <p class="not_necessary">
              Макс. 500 символов
            </p>
          </div>
          <textarea class="input" name="message" id="message" rows="5" maxlength="500" placeholder="Напишите свое сообщение*"/>
        </div> -->
        <textarea class="input" name="message" id="message" rows="5" maxlength="500" placeholder="Напишите свое сообщение*"/>
      </div>
      <button class="button mt-8">
        Отправить
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'ConnectWithUs',
  data() {
    return {
      form: {
        surname: '',
        name: '',
        email: '',
        numberPhone: '',
        theme: '',
        message: ''
      }
    }
  },
  methods: {
    connect() {
      console.log(this.form);
    }
  }
}
</script>
<style scoped>

.label {
  color: #4B5563;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  cursor: pointer;
}
@media screen and (max-width: 640px) {
  .label {
    font-size: 14px;
    line-height: 19px;
  }
}
.not_necessary {
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #6B7280;
}
@media screen and (max-width: 640px) {
  .not_necessary {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
