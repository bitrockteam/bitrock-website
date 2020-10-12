const pkg = require('./../../package.json');

module.exports = {
  title: pkg.displayName,
  description: pkg.description,

  themeConfig: {
    nav: [
      { text: 'About', link: '/discover' },
      { text: 'Academy', link: '/academy' },
      { 
        text: 'Join Us', 
        link: 'https://www.linkedin.com/company/bitrock-srl/jobs/',
        external: true
      },
      { text: 'Blog', link: '/blog' },
    ]
  },

  head: [
    ['link', { rel: 'icon', href: '/logotype.png' }],
    ['link', { rel: 'manifest', href: '/app.webmanifest' }],
    ['meta', { name: 'theme-color', content: pkg.config.themeColor }],
    ['meta', { name: 'author', content: pkg.displayName }],
    ['meta', { name: 'title', property: 'og:title', content: pkg.displayName }],
    ['meta', { name: 'og:description', content: pkg.description }],
    ['meta', { name: 'image', property: 'og:image', content: '/social.png' }],
  ],

  plugins: [
    '@vuepress/nprogress',
    ['@vuepress/google-analytics', {
      'ga': 'UA-127344693-1'
    }],
    '@vuepress/back-to-top',
    ['@vuepress/pwa', {
      'serviceWorker': true,
      // 'popupComponent': 'UpdatePopup',
      'updatePopup': true,
    }]
  ]
}