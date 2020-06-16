export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  server: {
    // port: 8000,
    // host: '127.0.0.1'
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: '//lib.baomitu.com/fastclick/1.0.6/fastclick.min.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // {
    //   src: './node_modules/amfe-flexible/index.js',
    //   ssr: false
    // }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: './assets/variables.scss',
    less: './assets/**/*.less'
    // sass: ...
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        'postcss-px2rem-exclude': {
          remUnit: 16,
          exclude: /(node_modules)/i
        }
      }
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
