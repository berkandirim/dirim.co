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
    title: 'Berkan Dirim · Frontend Developer',
    meta: [
      { charset: 'UTF-8' },
      { name: 'description', content: 'I\'m a frontend developer currently located in Nuremberg.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' }
    ],
    link: [
      {href: 'https://fonts.googleapis.com/css?family=Cousine:400,700&display=swap', rel: 'stylesheet'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'tomato' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: 'tomato'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ]
}
