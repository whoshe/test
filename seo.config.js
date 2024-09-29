export default {
  defaultTitle: '연습장',
  titleTemplate: '%s | 연습장',
  description: '내 이웃의 문화예술',
  canonical: '/',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://ui.d3tb24esmxw7nr.amplifyapp.com',
    siteName: '동네서점 Bookshopmap',
    images: [{ url: '/cover.png' }],
    twitter: {
      handle: '@handle',
      site: '@bookshopmap',
      cardType: '/card-sq.png',
    },
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '',
    },
  ],
  additionalMetaTags: [
    // {
    //   property: 'viewport',
    //   content: 'width=device-width, initial-scale=1',
    // },
    { property: 'dc:creator', content: '남창우 Changwoo Nam' },
    { property: 'dc:developer', content: '조윤호 Yunho Jo' },
    { property: 'dc:desiner', content: '이예연 Yeyeon Lee' },
    {
      property: 'naver-site-verification',
      content: '766266796b84b0c8eff8803b7f6dbab5700b823a',
    },
  ],
}
