<template>
<div>
  <div class=" flex flex-wrap sm:flex-nowrap gap-10" v-if="isLoading">
    <div class="w-full sm:w-3/4">
      <div class="animate-pulse h-5 w-52 bg-[#D9D9D9] rounded"/>
      <div class="my-8 animate-pulse h-8 w-36 rounded bg-[#BDBDBD]"/>
      <div class="animate-pulse py-5 border-y border-[#D1D5DB] flex items-center justify-between gap-4">
        <div class="animate-pulse h-6 w-60 bg-[#D9D9D9] rounded"/>
        <div class="animate-pulse h-6 w-40 bg-[#D9D9D9] rounded"/>
      </div>
      <div class="mt-8 mb-10 h-[354px] rounded-md animate-pulse bg-[#CCC] flex justify-center items-center">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38 28C39.1867 28 40.3467 27.6481 41.3334 26.9888C42.3201 26.3295 43.0892 25.3925 43.5433 24.2961C43.9974 23.1997 44.1162 21.9933 43.8847 20.8295C43.6532 19.6656 43.0818 18.5965 42.2426 17.7574C41.4035 16.9182 40.3344 16.3468 39.1705 16.1153C38.0067 15.8838 36.8003 16.0026 35.7039 16.4567C34.6075 16.9109 33.6705 17.6799 33.0112 18.6666C32.3519 19.6533 32 20.8133 32 22C32 23.5913 32.6321 25.1174 33.7574 26.2426C34.8826 27.3679 36.4087 28 38 28ZM38 20C38.3956 20 38.7822 20.1173 39.1111 20.3371C39.44 20.5568 39.6964 20.8692 39.8478 21.2346C39.9991 21.6001 40.0387 22.0022 39.9616 22.3902C39.8844 22.7781 39.6939 23.1345 39.4142 23.4142C39.1345 23.6939 38.7781 23.8844 38.3902 23.9616C38.0022 24.0387 37.6001 23.9991 37.2346 23.8478C36.8692 23.6964 36.5568 23.44 36.3371 23.1111C36.1173 22.7822 36 22.3956 36 22C36 21.4696 36.2107 20.9609 36.5858 20.5858C36.9609 20.2107 37.4696 20 38 20Z" fill="#949494"/>
          <path d="M52 8H12C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12V52C8 53.0609 8.42143 54.0783 9.17157 54.8284C9.92172 55.5786 10.9391 56 12 56H52C53.0609 56 54.0783 55.5786 54.8284 54.8284C55.5786 54.0783 56 53.0609 56 52V12C56 10.9391 55.5786 9.92172 54.8284 9.17157C54.0783 8.42143 53.0609 8 52 8ZM52 52H12V40L22 30L33.18 41.18C33.9295 41.925 34.9433 42.3432 36 42.3432C37.0567 42.3432 38.0705 41.925 38.82 41.18L42 38L52 48V52ZM52 42.34L44.82 35.16C44.0705 34.415 43.0567 33.9968 42 33.9968C40.9433 33.9968 39.9295 34.415 39.18 35.16L36 38.34L24.82 27.16C24.0705 26.415 23.0567 25.9968 22 25.9968C20.9433 25.9968 19.9295 26.415 19.18 27.16L12 34.34V12H52V42.34Z" fill="#949494"/>
        </svg>
      </div>
      <div class="w-3/4 mx-auto h-60 rounded-md animate-pulse bg-[#CCC] flex justify-center items-center"/>
      <div class="animate-pulse mt-10 px-8 py-6 border border-[#D1D5DB] rounded-2xl flex flex-col sm:flex-row gap-5 sm:gap-20 text-xl">
          <div class="flex flex-col gap-4">
            <div class="animate-pulse h-5 w-28 bg-[#D9D9D9] rounded"/>
            <div class="animate-pulse h-5 w-52 bg-[#D9D9D9] rounded"/>
          </div>
          <div class="flex flex-col gap-4">
            <div class="animate-pulse h-5 w-28 bg-[#D9D9D9] rounded"/>
            <div class="animate-pulse h-5 w-52 bg-[#D9D9D9] rounded"/>
          </div>
        </div>
    </div>
    <div class="w-full sm:w-1/4">
      <h2 class="pb-4 border-b border-[#D1D5DB] font-semibold text-xl">
        Читайте также
      </h2>
      <div class="mt-6 flex flex-col gap-6">
        <LoadingPoster v-for="num in 2" :key="num"/>
      </div>
    </div>
  </div>
  <div v-else class="flex flex-wrap sm:flex-nowrap gap-10">
    <div class="w-full sm:w-3/4">
      <div class="flex items-center gap-4 font-medium">
        <p @click="$router.push(localePath('/poster'))" class="cursor-pointer">
          {{$t('pages.posterSlug.title')}}
        </p>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_5243_1476)">
          <path d="M10.9766 9.99999L6.85156 5.87499L8.0299 4.69666L13.3332 9.99999L8.0299 15.3033L6.85156 14.125L10.9766 9.99999Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0_5243_1476">
          <rect width="20" height="20" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <p>
          {{poster.title}}
        </p>
      </div>
      <h1 class="my-8 font-bold text-3xl">
        {{poster.title}}
      </h1>
      <div class="flex flex-col sm:flex-row items-center gap-4 justify-between py-5 border-y border-[#D1D5DB] text-[#6B7280]">
        <p class="text-lg font-semibold">
          {{$t('pages.posterSlug.publicationDate')}}: {{poster.created_at}}
        </p>
        <div class="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_5139_16830)">
            <path d="M10.9999 2.75C15.9426 2.75 20.0548 6.30667 20.9174 11C20.0557 15.6933 15.9426 19.25 10.9999 19.25C6.05727 19.25 1.9451 15.6933 1.08252 11C1.94419 6.30667 6.05727 2.75 10.9999 2.75ZM10.9999 17.4167C12.8695 17.4163 14.6835 16.7813 16.1451 15.6156C17.6067 14.4499 18.6293 12.8226 19.0455 11C18.6277 9.17886 17.6045 7.55334 16.143 6.38919C14.6816 5.22504 12.8684 4.59115 10.9999 4.59115C9.13149 4.59115 7.31832 5.22504 5.85686 6.38919C4.39541 7.55334 3.37214 9.17886 2.95435 11C3.37061 12.8226 4.39322 14.4499 5.85482 15.6156C7.31642 16.7813 9.13042 17.4163 10.9999 17.4167ZM10.9999 15.125C9.90592 15.125 8.85671 14.6904 8.08312 13.9168C7.30953 13.1432 6.87494 12.094 6.87494 11C6.87494 9.90598 7.30953 8.85677 8.08312 8.08319C8.85671 7.3096 9.90592 6.875 10.9999 6.875C12.094 6.875 13.1432 7.3096 13.9168 8.08319C14.6903 8.85677 15.1249 9.90598 15.1249 11C15.1249 12.094 14.6903 13.1432 13.9168 13.9168C13.1432 14.6904 12.094 15.125 10.9999 15.125ZM10.9999 13.2917C11.6077 13.2917 12.1906 13.0502 12.6204 12.6205C13.0502 12.1907 13.2916 11.6078 13.2916 11C13.2916 10.3922 13.0502 9.80932 12.6204 9.37955C12.1906 8.94978 11.6077 8.70833 10.9999 8.70833C10.3921 8.70833 9.80925 8.94978 9.37948 9.37955C8.94971 9.80932 8.70827 10.3922 8.70827 11C8.70827 11.6078 8.94971 12.1907 9.37948 12.6205C9.80925 13.0502 10.3921 13.2917 10.9999 13.2917Z" fill="#6B7280"/>
            </g>
            <defs>
            <clipPath id="clip0_5139_16830">
            <rect width="22" height="22" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          <p>
            {{poster.click_count}} {{$t('pages.posterSlug.view')}}
          </p>
        </div>
      </div>
        <img :src="poster.image" :alt="poster.title" class="mt-8 mb-10 w-full h-[300px] sm:h-[550px] rounded-2xl">
        <Editor :description="poster.description"/>
        <div class="mt-10 px-8 py-6 border border-[#D1D5DB] rounded-2xl flex flex-col sm:flex-row gap-5 sm:gap-20 text-xl">
          <div class="flex flex-col gap-2">
            <p class=" text-[#6B7280]">
              {{$t('pages.posterSlug.date')}}
            </p>
            <p class="text-black font-semibold">
              {{poster.event_date}}
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <p class="text-[#6B7280]">
              {{$t('pages.posterSlug.place')}}
            </p>
            <p class="text-black font-semibold">
              {{poster.address}}
            </p>
          </div>
          <div v-if="poster.free" class="flex flex-col gap-2">
            <p class="text-[#6B7280]">
              Цена
            </p>
            <p class="text-black font-semibold">
              {{poster.cost}}
            </p>
          </div>
        </div>
    </div>
    <div class="w-full sm:w-1/4">
      <h2 class="pb-4 border-b border-[#D1D5DB] font-semibold text-xl">
        {{$t('pages.posterSlug.readAlso')}}
      </h2>
      <div class="mt-6 flex flex-col gap-6">
        <Poster v-for="poster in posters" :key="poster.id" :poster="poster.poster"/>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Editor from '~/components/editor.vue'
import Poster from '@/components/card/poster.vue'
import LoadingPoster from '@/components/card/loading/poster.vue'
export default {
  name: 'SinglePagePoster',
  head: {
    title: 'Афиша'
  },
  components: {
    Editor,
    Poster,
    LoadingPoster
  },
  data() {
    return {
      poster: {},
      posters: [],
      applyTailwindClasses: false,
      isLoading: true
    }
  },
  methods: {
    async getPoster() {
      let res = await this.$axios.get(`/web/posters/slug/${this.$route.params.slug}`)
      this.poster = res.data.data[0].poster
      await this.getPosters()
    },
    async getPosters() {
      let res = await this.$axios.get(`/web/posters?lang=${this.$i18n.locale}`)
      this.posters = res.data.data
      this.posters = this.posters.filter((item) => {
        return item.poster.id !== this.poster.id
      })
      this.isLoading = false
    },
  },
  mounted() {
    this.getPoster()

  }
}
</script>
