import randomInteger from '@/helpers/randomInteger'
export const state = () => ({
  search: {
    isShow: false
  },
  burgerMenu: {
    isShow: false
  },
  alert: {
    isShow: false,
    msg: '',
    type: ''
  },
  isShowPosterModal: false,
  banners: [], /* Переменная, хранит в себе массив баннеров */
  news: [
    {
      id: 1,
      image: '/images/news/1.webp',
      category: 'Новости',
      title: 'Coca Cola',
      subtitle: 'Подзаголовок новости Coca Cola',
      description: 'Впервые представленная в 2005 году, Coca‑Cola Без Сахара к настоящему времени стала  успешным брендом по всему миру.',
      time: '12:00',
      date: '01.01.2023'
    },
    {
      id: 2,
      image: '/images/news/2.webp',
      category: 'Истории',
      title: 'Новость про историю 1',
      subtitle: 'Подзаголовок новости Истории 1',
      description: 'Впервые представленная в 2005 году, Coca‑Cola Без Сахара к настоящему времени стала  успешным брендом по всему миру.',
      time: '12:00',
      date: '01.01.2023'
    },
    {
      id: 3,
      image: '/images/news/2.webp',
      video: 'https://www.youtube.com/embed/OJ6xbfFZ7i8',
      category: 'Подкасты',
      title: 'Новость про подкаты 1',
      subtitle: 'Подзаголовок новости подкастов 1',
      description: 'Впервые представленная в 2005 году, Coca‑Cola Без Сахара к настоящему времени стала  успешным брендом по всему миру.',
      time: '12:00',
      date: '01.01.2023'
    },
    {
      id: 4,
      image: '/images/news/2.webp',
      category: 'Новости',
      title: 'На свет надежды нет». Почему на севере Таджикистана стали актуальными кизяк и дрова?',
      subtitle: 'На свет надежды нет». Почему на севере Таджикистана стали актуальными кизяк и дрова?',
      description: 'Впервые представленная в 2005 году, Coca‑Cola Без Сахара к настоящему времени стала  успешным брендом по всему миру.',
      time: '12:00',
      date: '01.01.2023'
    },
    {
      id: 5,
      image: '/images/news/3.png',
      video: 'https://www.youtube.com/embed/OJ6xbfFZ7i8',
      category: 'Новости',
      title: 'Сегодня прекрасный день!',
      subtitle: 'Сегодня прекрасный день!',
      description: 'Впервые представленная в 2005 году, Coca‑Cola Без Сахара к настоящему времени стала  успешным брендом по всему миру.',
      time: '12:00',
      date: '01.01.2023'
    },
    {
      id: 6,
      image: '/images/news/4.webp',
      category: 'Партнерский материал',
      title: 'Сегодня прекрасный день!',
      subtitle: 'Сегодня прекрасный день!',
      description: 'Впервые представленная в 2005 году, Coca‑Cola Без Сахара к настоящему времени стала  успешным брендом по всему миру.',
      time: '12:00',
      date: '01.01.2023'
    },
    {
      id: 7,
      image: '/images/news/5.webp',
      category: 'Партнерский материал',
      title: 'Партнерский материал 1',
      subtitle: 'Подзаголовок Партнерский материал 1',
      description: 'Впервые представленная в 2005 году, Coca‑Cola Без Сахара к настоящему времени стала  успешным брендом по всему миру.',
      time: '12:00',
      date: '01.01.2023'
    },
    {
      id: 8,
      image: '/images/news/6.webp',
      category: 'Партнерский материал',
      title: 'Партнерский материал 1',
      subtitle: 'Подзаголовок Партнерский материал 1',
      description: 'Впервые представленная в 2005 году, Coca‑Cola Без Сахара к настоящему времени стала  успешным брендом по всему миру.',
      time: '12:00',
      date: '01.01.2023'
    },
    {
      id: 9,
      image: '/images/news/7.webp',
      category: 'Партнерский материал',
      title: 'Партнерский материал 1',
      subtitle: 'Подзаголовок Партнерский материал 1',
      description: 'Впервые представленная в 2005 году, Coca‑Cola Без Сахара к настоящему времени стала  успешным брендом по всему миру.',
      time: '12:00',
      date: '01.01.2023'
    },
    {
      id: 10,
      image: '/images/news/10.webp',
      category: 'Партнерский материал',
      title: 'Горы Таджикистана',
      subtitle: 'Подзаголовок Горы Таджикистана',
      description: 'В Таджикистане находятся такие горные системы как Туркестанский, Зеравшанский, Гиссарский и Алайский хребты, а вся восточная часть страны находится в пределах Памира. Высшая точка Таджикистана – пик Исмоила Сомони высотой 7495 метров. А также в стране располагается 24 вершины выше 6000 метров.',
      time: '12:00',
      date: '01.01.2023'
    },
    {
      id: 11,
      image: '/images/news/11.webp',
      category: 'Партнерский материал',
      title: 'Кастомейкер покрытий. Как девушка из Душанбе занимается росписью на заказ',
      subtitle: 'На сегодня Парвина Венская - одна из самых популярных кастомейкеров в Душанбе.',
      description: 'В Таджикистане находятся такие горные системы как Туркестанский, Зеравшанский, Гиссарский и Алайский хребты, а вся восточная часть страны находится в пределах Памира. Высшая точка Таджикистана – пик Исмоила Сомони высотой 7495 метров. А также в стране располагается 24 вершины выше 6000 метров.',
      time: '12:00',
      date: '01.01.2023'
    },
  ]
})
export const mutations = {
  CHANGE_STATE(state, payload) {
    state[payload.key] = payload.body
  },
  CLEAR_ALERT(state) {
    state.alert = {
      isShow: false,
      msg: '',
      type: ''
    }
  }
}
export const actions = {
  async get_page({commit}, payload) {
    try {
      let res = await this.$axios.get(payload.request)
      payload.body = res.data.data
      commit('CHANGE_STATE', payload)
    } catch(err) {
      console.log(err);
    }
  }
}
export const getters = {
  bannerA1(state) {
    return state.banners.filter((item) => item.location == 'A1')
  },
  bannerA2(state) {
    return state.banners.filter((item) => item.location == 'A2')
  },
  bannerA3(state) {
    return state.banners.filter((item) => item.location == 'A3')
  },
  bannerB1(state) {
    return state.banners.filter((item) => item.location == 'B1')
  },
  bannerB2(state) {
    return state.banners.filter((item) => item.location == 'B2')
  },
  idxA1(state, getters) {
    return Math.abs(randomInteger(0, getters.bannerA1.length - 1))
  },
  idxA2(state, getters) {
    return Math.abs(randomInteger(0, getters.bannerA2.length - 1))
  },
  idxA3(state, getters) {
    return Math.abs(randomInteger(0, getters.bannerA3.length - 1))
  },
  idxB1(state, getters) {
    return Math.abs(randomInteger(0, getters.bannerB1.length - 1))
  },
  idxB2(state, getters) {
    return Math.abs(randomInteger(0, getters.bannerB2.length - 1))
  },
}
