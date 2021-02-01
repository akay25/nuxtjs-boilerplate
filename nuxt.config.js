import webpack from 'webpack';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Comet',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Comet is soon-to-be the best manga reader app for every platform',
      },
      { name: 'author', content: 'Ajay M' },
      { property: 'og:site_name', content: 'Comet' },
      { property: 'og:site', content: 'https://comet.cc' },
      { property: 'og:title', content: 'Comet' },
      {
        property: 'og:description',
        content:
          'Comet is soon-to-be the best manga reader app for every platform',
      },
      { property: 'og:image', content: '' },
      { property: 'og:url', content: '' },
      { property: 'og:type', content: 'landing-page' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/bootstrap.scss',
    // '@/assets/css/magnific-popup.css',
    // '@/assets/css/swiper.css',
    '@/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/bootstrap.min.js', mode: 'client' },
    // { src: '~/plugins/swiper.min.js', mode: 'client' },
    // { src: '~/plugins/jquery.magnific-popup.js', mode: 'client' },
    { src: '~/plugins/script.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Module rules
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxt/content'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  build: {
    /**
     * add external plugins
     */
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
      }),
    ],
  },
};
