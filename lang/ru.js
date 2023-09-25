export default {
  links: [
    {
      id: 1,
      text: 'Новости',
      link: '/news',
      icon: 'news'
    },
    {
      id: 2,
      text: 'Истории',
      link: '/history',
      icon: 'history'
    },
    {
      id: 3,
      text: 'Подкасты',
      link: '/podcasts',
      icon: 'podcasts'
    },
    {
      id: 4,
      text: 'Афиша',
      link: '/poster',
      icon: 'poster'
    }
  ],
  search: 'Найти',
  modals: {
    poster: {
      header: 'Форма предложения афиши',
      planning: {
        start: 'Дата проведения мероприятия',
      },
      image: {
        label: 'Ссылка на фото или иллюстрацию к мероприятию',
        placeholder: 'Ссылка на фото или иллюстрацию к мероприятию'
      },
      title: {
        label: 'Название мероприятия',
        placeholder: 'Введите название мероприятия'
      },
      address: {
        label: 'Адрес проведения',
        placeholder: 'Введите адрес проведения'
      },
      link: {
        label: 'Ссылка на сайт мероприятия, если имеется'
      },
      description: {
        label: 'Описание'
      },
      saveButton: 'Сохранить',
      closeButton: 'Отмена',
      free: 'Бесплатно',
      fee: 'Платно'
    }
  },
  pages: {
    main: {
      poster: {
        title: 'Афиша',
        offer: 'Предложить мероприятие',
        showAll: 'Посмотреть все'
      }
    },
    login: {
      title: 'Вход и регистрация',
      subTitle: 'Войдите с помощью одной из соц. сетей',
      description: 'Авторизуясь на сайте вы принимаете пользовательское соглашение, политику конфиденциальности и политику файлов cookie'
    },
    posterSlug: {
      title: 'Афиша',
      publicationDate: 'Дата публикации',
      view: 'просмотра',
      date: 'Дата',
      place: 'Место',
      readAlso: 'Читайте также'
    }
  },
  footer: {
    project: 'О проекте',
    connect: 'Связаться с нами',
    partners: 'Партнерам',
    mailing: 'Еженедельная рассылка',
    subscribe: 'Подписаться',
    rights: '2023 Все права защищены'
  }
}
