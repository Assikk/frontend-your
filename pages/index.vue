<template>
  <div>
    <div v-if="isLoading" class="flex flex-col gap-12">
      <div
        class="grid gap-5 lg:max-w-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        <LoadingPrimaryCard v-for="num in 3" :key="num" />
      </div>
      <LoadingSecondaryCard />
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <LoadingPhotoCard v-for="num in 2" :key="num" />
      </div>
    </div>
    <div v-else class="flex flex-col gap-12">
      <div
        class="grid gap-5 lg:max-w-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        <PrimaryCard
          v-for="post in news.slice(0, 3)"
          :key="post.id"
          :post="post"
        />
      </div>
      <SecondaryCard :post="news[3]" />
      <div class="h-[354px] sm:h-[475px]">
        <PhotoCard :post="news[4]" />
      </div>
      <SecondaryCard :post="news[3]" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="h-[354px]" v-for="post in news.slice(6, 8)" :key="post.id">
          <PhotoCard :post="post" />
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PrimaryCard :post="news[7]" />
        <intersect v-if="bannerB1.length > 0" @enter.once="viewBanner(bannerB1[idxB1])">
          <SmallBanner :banner="bannerB1[idxB1]" />
        </intersect>
        <PrimaryCard :post="news[8]" />
      </div>
      <!-- Начало блока Афиш -->
      <div>
        <div class="flex items-end gap-4">
          <h2 class="font-bold text-lg sm:text-[26px]">
            {{ $t("pages.main.poster.title") }}
          </h2>
          <p
            class="font-medium text-[#0048B7] cursor-pointer"
            @click="openPosterModal"
          >
            {{ $t("pages.main.poster.offer") }}
          </p>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 sm:mt-6"
        >
          <Poster
            v-for="poster in posters.slice(0, 8)"
            :key="poster.id"
            :poster="poster.poster"
          />
        </div>
        <div class="flex justify-end mt-6">
          <p v-if="posters.length > 8"
            class="font-medium cursor-pointer hover:underline"
            @click="$router.push(localePath('/poster'))"
          >
            {{ $t("pages.main.poster.showAll") }}
          </p>
        </div>
      </div>
      <!-- Конец блока Афиш -->
      <intersect v-if="bannerA2.length > 0" @enter.once="viewBanner(bannerA2[idxA2])">
        <Banner  :banner="bannerA2[idxA2]" />
      </intersect>

      <!-- Начало блока спецпроектов -->
      <div>
        <h2 class="font-bold text-lg sm:text-[26px]">Спецпроекты</h2>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 sm:mt-6"
        >
          <SpecialProject
            v-for="project in special_projects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
      <!-- Конец блока спецпроектов -->
      <SecondaryCard :post="news[3]" />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PrimaryCard :post="news[7]" />
        <intersect v-if="bannerB2.length > 0" @enter.once="viewBanner(bannerB2[idxB2])">
          <SmallBanner :banner="bannerB2[idxB2]" />
        </intersect>
        <PrimaryCard :post="news[8]" />
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <div
          class="flex flex-col h-[259px] sm:h-[296px]"
          v-for="num in 4"
          :key="num"
        >
          <div>
            <img
              class="w-full h-[154px] sm:h-[171px] rounded-none sm:rounded-md"
              src="/images/news/1.webp"
              alt=""
            />
          </div>
          <div class="pt-4 sm:pt-6 flex flex-col justify-between gap-4 h-full">
            <p
              class="max-h-[66px] overflow-hidden font-semibold text-sm sm:text-base"
            >
              Как в Турсунзаде смогли сохранить одну из самых больших школ
              дутара в Таджикистане
            </p>

            <div
              class="flex justify-between items-center text-sm text-[#6B7280]"
            >
              <p>12:00</p>
              <p>01.01.2023</p>
            </div>
          </div>
        </div>
      </div>
      <intersect v-if="bannerA3.length > 0" @enter.once="viewBanner(bannerA3[idxA3])">
        <Banner :banner="bannerA3[idxA3]" />
      </intersect>
    </div>
    <transition name="home">
      <PosterModal v-if="isShowPosterModal" />
    </transition>
  </div>
</template>
<script>
import PrimaryCard from "@/components/card/primary.vue";
import SecondaryCard from "@/components/card/secondary.vue";
import PhotoCard from "@/components/card/photo.vue";
import MailingCard from "@/components/card/mailing.vue";
import Carousel from "@/components/carousel.vue";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import Poster from "@/components/card/poster.vue";
import SpecialProject from "@/components/card/project.vue";
import dayjs from "dayjs";
import SmallBanner from "@/components/banner/small.vue";
import LoadingPrimaryCard from "@/components/card/loading/primary.vue";
import LoadingSecondaryCard from "@/components/card/loading/secondary.vue";
import LoadingPhotoCard from "@/components/card/loading/photo.vue";
import PosterModal from "@/components/modals/poster.vue";
import Button from "@/components/buttons/default.vue";
import Intersect from 'vue-intersect'
export default {
  name: "IndexPage",
  head: {
    title: "Главная",
  },
  components: {
    PrimaryCard,
    SecondaryCard,
    PhotoCard,
    MailingCard,
    Carousel,
    Poster,
    SpecialProject,
    SmallBanner,
    LoadingPrimaryCard,
    LoadingSecondaryCard,
    LoadingPhotoCard,
    PosterModal,
    Button,
    Intersect
  },
  computed: {
    ...mapState({
      news: (state) => state.news,
      isShowPosterModal: (state) => state.isShowPosterModal,
    }),
    ...mapGetters({
      bannerA2: "bannerA2",
      bannerA3: "bannerA3",
      bannerB1: "bannerB1",
      bannerB2: "bannerB2",
      idxA2: "idxA2",
      idxA3: "idxA3",
      idxB1: "idxB1",
      idxB2: "idxB2",
    }),
  },
  data() {
    return {
      posters: [] /* Переменная, хранит в себе массив афиш */,
      special_projects: [] /* Переменная, хранит в себе массив спецпроектов */,
      isLoading: true /* Переменная хранит в себе статус загрузки страницы */,
    };
  },
  methods: {
    ...mapMutations({
      change_state: "CHANGE_STATE",
    }),
    ...mapActions({
      get_page: "get_page",
    }),
    async get_poster() { /* Get запрос афиш */
      let res = await this.$axios.get(`/web/posters?lang=${this.$i18n.locale}`);
      this.posters = res.data.data; /* Записываем ответ бэка в переменную */
      this.posters.forEach((item) => {
        /* Меняем формат даты */
        item.poster.start = dayjs(item.poster.start).format(
          "HH:MM - DD:MM:YYYY"
        );
      });
      this.posters.sort((a, b) => { /* Сортировка афиш сначала рекоммендованные, а потом обычные */
        // Сравниваем товары по флагу priority (предполагая, что это булево значение)
        if (a.poster.priority && !b.poster.priority) {
          return -1; // a идет перед b
        } else if (!a.poster.priority && b.poster.priority) {
          return 1; // b идет перед a
        } else {
          return 0; // сохраняем порядок для товаров с одинаковым статусом
        }
      });
    },
    async viewBanner(item) {
      await this.$axios.get(`/web/advertisement/${item.id}/view`)
    },
    async get_specialProjects() {
      /* Get запрос спец проектов */
      let res = await this.$axios.get(
        `/web/special-projects?lang=${this.$i18n.locale}`
      );
      this.special_projects = res.data.data;
    },
    async get_banners() {
      /* Get запрос реклам */
      let payload = {
        request: "/web/advertisements",
        key: "banners",
        body: [],
      };
      await this.get_page(payload);
      this.isLoading = false;
    },
    openPosterModal() {
      let payload = {
        key: "isShowPosterModal",
        body: true,
      };
      this.change_state(payload);
    },
  },
  mounted() {
    this.get_poster();
    this.get_specialProjects();
    this.get_banners();
  },
};
</script>
