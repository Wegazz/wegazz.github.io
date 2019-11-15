module.exports = {
    title: 'Wegazz.Бложек',
    description: 'То что хочется сохранить из интернет простора',
    lang : "ru-RU",
    themeConfig: {
      // sidebar: [
      //   {
      //     title: 'Python',   // required
      //     path: '/python/',      // optional, which should be a absolute path.
      //     collapsable: false, // optional, defaults to true
      //     sidebarDepth: 3,    // optional, defaults to 1
      //     children: [
      //       '/python/lists.html'
      //     ]
      //   },
      //   {
      //     title: 'Group 2',
      //     children: [ /* ... */ ]
      //   }
      // ],

      // sidebar: [
      //   '/python/',
      //   // ['/page-b', 'Explicit link text']
      // ],

      // logo: '/assets/img/header_bg.jpg', // логотип сайта
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Python', link: '/python/' },
        { text: 'Sales', link: '/sales/' },
        { text: 'Test', link: '/test/' },
        { text: 'Google', link: 'https://google.com' }
      ]
    },
    configureWebpack: {
      resolve: {
        alias: {
          '@aa': 'public/aaa/'
        }
      }
    }

  }