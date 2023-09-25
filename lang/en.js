export default {
  links: [
    {
      id: 1,
      text: 'News',
      link: '/news',
      icon: 'news'
    },
    {
      id: 2,
      text: 'History',
      link: '/history',
      icon: 'history'
    },
    {
      id: 3,
      text: 'Podcasts',
      link: '/podcasts',
      icon: 'podcasts'
    },
    {
      id: 4,
      text: 'Poster',
      link: '/poster',
      icon: 'poster'
    }
  ],
  search: 'Find',
  modals: {
    poster: {
      header: 'Poster offer form',
      planning: {
        start: 'Date of the event',
      },
      image: {
        title: 'Link to a photo or illustration for the event',
        placeholder: 'Link to a photo or illustration for the event'
      },
      title: {
        label: 'Event name',
        placeholder: 'Enter event name'
      },
      address: {
        label: 'Address of the event',
        placeholder: 'Enter address of the event'
      },
      link: {
        label: "Link to the event's website, if available"
      },
      description: {
        label: 'Description'
      },
      saveButton: 'Save',
      cancelButton: 'Cancel',
      free: 'Free',
      fee: 'Fee'
    }
  },
  pages: {
    main: {
      poster: {
        title: 'Poster',
        offer: 'Suggest an event',
        showAll: 'View all'
      }
    },
    login: {
      title: 'Login and registration',
      subTitle: 'Log in using one of the social networks',
      description: 'By logging in to the site, you accept the User Agreement, privacy Policy and cookie policy'
    },
    posterSlug: {
      title: 'Poster',
      publicationDate: 'Date of publication',
      view: 'viewing',
      date: 'Date',
      place: 'Place',
      readAlso: 'Read also'
    }
  },
  footer: {
    project: 'About the project',
    connect: 'Contact us',
    partners: 'Partners',
    mailing: 'Weekly newsletter',
    subscribe: 'Subscribe',
    rights: '2023 All rights reserved'
  }
}

