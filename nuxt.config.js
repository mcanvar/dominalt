// eslint-disable-next-line nuxt/no-cjs-in-config
const colors = require('tailwindcss/colors')

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/dominalt/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dominalt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

    bodyAttrs: {
      class: 'flex flex-col min-h-screen bg-white pb-10 font-sans'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/layouts/partials']
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  tailwindcss: {
    config: {
      theme: {
        extend: {
          rotate: {
            '-1': '-1deg',
            '-2': '-2deg',
            '-3': '-3deg',
            1: '1',
            2: '2deg',
            3: '3deg'
          },
          borderRadius: {
            xl: '0.8rem',
            xxl: '1rem'
          },
          height: {
            '1/2': '0.125rem',
            '2/3': '0.1875rem'
          },
          maxHeight: {
            16: '16rem',
            20: '20rem',
            24: '24rem',
            32: '32rem'
          },
          inset: {
            '1/2': '50%'
          },
          width: {
            96: '24rem',
            104: '26rem',
            128: '32rem'
          },
          transitionDelay: {
            450: '450ms'
          },
          colors: {
            rose: colors.rose,
            teal: colors.teal,
            wave: {
              50: '#F2F8FF',
              100: '#E6F0FF',
              200: '#BFDAFF',
              300: '#99C3FF',
              400: '#4D96FF',
              500: '#0069FF',
              600: '#005FE6',
              700: '#003F99',
              800: '#002F73',
              900: '#00204D'
            }
          }
        }
      },
      content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `composables/**/*.{js,ts}`,
        `plugins/**/*.{js,ts}`,
        `App.{js,ts,vue}`,
        `app.{js,ts,vue}`
      ]
    }
  }
}
