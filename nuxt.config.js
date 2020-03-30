const {gFonts, themeColor} = require('./config')

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
      { name: 'description', content: 'Software engineer currently located in Nuremberg.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=1' }
    ],
    link: [
      {href: gFonts.monospace, rel: 'stylesheet'}
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
  ]
}
