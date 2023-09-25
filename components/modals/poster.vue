<template>
  <div class="fixed top-0 bg-[#00000046] left-0 w-full h-full z-20 flex items-center justify-center">
    <div class="relative bg-white w-4/5 lg:w-1/2 h-4/5 overflow-y-auto rounded-lg p-4">
      <h2 class="font-bold text-2xl mb-4">
        {{$t('modals.poster.header')}}
      </h2>
      <div class="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div class="h-[90px] flex flex-col">
            <label class="text-sm font-medium text-gray-700 mb-2">
              {{$t('modals.poster.planning.start')}}
            </label>
            <div class="border w-full rounded-md">
              <DatePick
              v-model="poster.start"
              :pickTime="true"
              :format="'YYYY-MM-DD HH:mm'" />
            </div>
          </div>
        </div>
        <div class="flex gap-2 items-center">
          <ToggleButton :value="poster.free" color="#0048B7" :height="24" :width="44"
          @change="(value) => poster.free = value.value"/>
          <p class="w-[90px] text-center text-sm font-medium">
            {{poster.free ? `${$t('modals.poster.fee')}` : `${$t('modals.poster.free')}`}}
          </p>
          <Input
          v-model="poster.cost"
          type="number"
          id="price"
          :disabled="poster.free ? false : true"/>
        </div>
      </div>
      <Input class="my-6" v-model="poster.image" :label="$t('modals.poster.image.label')" :placeholder="$t('modals.poster.image.placeholder')"/>
      <Input class="my-6" v-model="poster.title" :label="$t('modals.poster.title.label')" :placeholder="$t('modals.poster.title.placeholder')">
      </Input>
      <Input v-model="poster.address" :label="$t('modals.poster.address.label')" :placeholder="$t('modals.poster.address.placeholder')">
      </Input>
      <Input class="my-6" v-model="poster.link" :label="$t('modals.poster.link.label')"/>
      <div class="flex flex-col gap-2">
        <p class="font-medium text-gray-700">
          {{$t('modals.poster.description.label')}}
        </p>
        <VueEditor v-model="poster.description" />
      </div>
      <!-- Начало блока кнопок -->
      <div class="mt-6 flex gap-5">
        <Button>
          {{$t('modals.poster.saveButton')}}
        </Button>
        <Button gray
        @click="closeModal">
          {{$t('modals.poster.closeButton')}}
        </Button>
      </div>
      <!-- <svg class="absolute top-4 right-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> -->
      <svg class="absolute top-4 right-4 cursor-pointer" fill="black" width="24" height="24"
      @click="closeModal">
        <use xlink:href="#close"/>
      </svg>
      <!-- Конец блока кнопок -->
    </div>
  </div>
</template>
<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
import {ToggleButton} from 'vue-js-toggle-button'
import Input from '@/components/inputs/default.vue'
import Button from '@/components/buttons/default.vue'
import {mapMutations} from 'vuex'
export default {
  name: 'PosterModal',
  components: {
    DatePick,
    ToggleButton,
    Input,
    Button
  },
  data() {
    return {
      poster: {
        start: '',
        free: false,
        cost: 0,
        title: '',
        address: '',
        link: '',
        description: '',
        status: 'На модерации',
      }
    }
  },
  methods: {
    ...mapMutations({
      change_state: 'CHANGE_STATE'
    }),
    closeModal() {
      let payload = {
        key: 'isShowPosterModal',
        body: false
      }
      this.change_state(payload)
    }
  }
}
</script>
<style scoped>
::v-deep .vdpComponent > input {
  outline: none;
  padding: 8px 12px;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
