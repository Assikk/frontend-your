<template>
  <div class="bg-black text-white py-5 sm:py-16">
    <div class="main__container">
      <div class="mb-2 sm:mb-6 border-b-[1px] border-white">
        <div class="mb-6 sm:mb-3">
          <div class="flex gap-5 justify-between mb-6 lg:mb-0">
            <NuxtLink :to="localePath('/about-project')" class="font-semibold text-xs sm:text-base">
              {{$t('footer.project')}}
            </NuxtLink>
            <NuxtLink :to="localePath('/connect-with-us')" class="font-semibold text-xs sm:text-base">
              {{$t('footer.connect')}}
            </NuxtLink>
            <NuxtLink :to="localePath('/')" class="font-semibold text-xs sm:text-base">
              {{$t('footer.partners')}}
            </NuxtLink>
            <div class="hidden lg:flex flex-col gap-3">
              <NuxtLink :to="localePath('/')" class="font-semibold">
                {{$t('footer.mailing')}}
              </NuxtLink>
                <div class="flex gap-3">
                <Input v-model="mail"/>
                <Button @click="subscribe"/>
              </div>
            </div>
          </div>
            <div class="block lg:hidden w-full flex flex-col sm:flex-row gap-3">
              <Input v-model="mail"/>
              <Button @click="subscribe"/>
            </div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row justify-start sm:justify-between gap-2">
        <p class="text-sm sm:text-base">
          © {{$t('footer.rights')}}
        </p>
        <div class="flex items-center gap-6">
          <a v-for="item in social" :key="item.id" :href="item.link" target="_blank">
            <svg fill="#fff" width="24" height="24">
              <use :xlink:href="'#' + item.svg"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
import validateEmail from '@/helpers/validateEmail'
import Input from './input.vue'
import Button from './button.vue'
export default {
  name: 'Footer',
  components: {
    Input,
    Button
  },
  data() {
    return {
      social: [
        {
          id: 1,
          svg: 'facebookWhite',
          link: 'https://ru-ru.facebook.com/'
        },
        {
          id: 2,
          svg: 'instagram',
          link: 'https://www.instagram.com/'
        },
        {
          id: 3,
          svg: 'youtube',
          link: 'https://www.youtube.com/'
        },
      ],
      mail: null
    }
  },
  methods: {
    ...mapMutations({
      change_state: 'CHANGE_STATE',
      clear_alert: 'CLEAR_ALERT'
    }),
    subscribe() {
      let payload
      if(this.mail == null) {
        payload = {
          key: 'alert',
          body: {
            isShow: true,
            msg: 'Введите почту',
            type: 'error'
          }
        }
        this.change_state(payload)
        setTimeout(() => {
          this.clear_alert()
        }, 2000)
      } else if(!validateEmail(this.mail)) {
        payload = {
          key: 'alert',
          body: {
            isShow: true,
            msg: 'Почта введена неккоретно',
            type: 'error'
          }
        }
        this.change_state(payload)
        setTimeout(() => {
          this.clear_alert()
        }, 2000)
      } else {
        payload = {
          key: 'alert',
          body: {
            isShow: true,
            msg: 'Вы успешно подписались на рассылку!',
            type: 'success'
          }
        }
        this.change_state(payload)
        setTimeout(() => {
          this.clear_alert()
        }, 2000)
      }
    },
  }
}
</script>
