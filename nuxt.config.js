const {gFonts, themeColor, fontFamily} = require('./config')

module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    title: 'Berkan Dirim · Software Engineer',
    meta: [
      { charset: 'UTF-8' },
      { name: 'description', content: 'Software engineer currently located in Amstelveen, NL.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=1' }
    ],
    link: [
      {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},
      {href: gFonts[fontFamily], rel: 'stylesheet'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: themeColor },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: themeColor
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  target: 'static'
}
