export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'your.colibri.tj',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/index.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    "@nuxtjs/google-fonts",
  ],

  googleFonts: {
    families: {
      Manrope: [200, 300, 400, 500, 600, 700, 800],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/auth-next',
    ["vue2-editor/nuxt"]
  ],
  auth: {
    strategies: {
      facebook: {
        endpoints: {
          userInfo: 'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}'
        },
        clientId: '153512667798496',
        scope: ['public_profile', 'email']
      },
      google: {
        clientId: 'your-398105', // Замените на свой Google Client ID
        codeChallengeMethod: '',
        responseType: 'code',
        endpoints: {
          token: 'http://localhost:8000/user/google/', // somm backend url to resolve your auth with google and give you the token back
          userInfo: 'http://localhost:8000/auth/user/' // the endpoint to get the user info after you recived the token
        },
      },
    }
  },

  i18n: {
    locales: [
      {code: 'ru', iso: 'ru-RU', file: 'ru.js'},
      {code: 'tj', iso: 'tj-TJ', file: 'tj.js'},
      {code: 'en', iso: 'en-EN', file: 'en.js'},
    ],
    defaultLocale: 'ru',
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'ru',
    },
    strategy: 'prefix',
    localeDetection: false,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://api.your.colibri.tj/api/',
    // baseURL: 'http://192.168.0.109:8000/api/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
