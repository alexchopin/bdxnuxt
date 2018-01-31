const pkg = require('./package')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Atelier Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Transformer votre site wordpress en Progressive Web App avec Nuxt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3498db' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/getFrenchDate.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
    /*
  ** Proxy
  */
  proxy: {
    '/api': {
      target: 'https://public-api.wordpress.com/rest/v1.1/sites/bdxnuxt.wordpress.com',
      pathRewrite: { '^/api': '' }
    }
  },
/*
  ** Build configuration
  */
  build: {
    postcss: [
      require('postcss-cssnext')()
    ]
  }
}
