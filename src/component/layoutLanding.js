import Head from 'next/head'
import Header from '@/component/landing/landingHeader'
import Footer from '@/component/landing/landingFooter'

export default function LayoutLanding({ children }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>신간알림이 도착했어요.</title>
        <meta
          name='description'
          content='독립서점 책방지기와 창작자, 독자의 받은 편지함으로 찾아가는 문화예술 이메일 광고 서비스입니다.'
        />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' sizes='16x16' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' sizes='180x180' />
        {/** 소셜미디어 오픈그래프 태그 */}
        <meta property='og:type' content='website' />
        <meta property='og:title' content='신간알림이 도착했어요.' />
        <meta
          property='og:description'
          content='독립서점 책방지기와 창작자, 독자의 받은 편지함으로 찾아가는 문화예술 이메일 광고 서비스입니다.'
        />
        <meta property='og:url' content='https://singan.bookshopmap.com' />
        <meta property='og:locale' content='ko_KR' />
        <meta property='og:image' content='/cover.jpg' sizes='1200x630' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta
          property='og:image:alt'
          content='Culture and Arts Email Catalog Advertising Service.'
        />
        {/** 네이버 웹마스터 도구 사이트 소유확인 태그 */}
        <meta name='naver-site-verification' content='f8e218ae0abcdfbaeb2a7b434e0cf639ccfb83cf' />
      </Head>
      {/** 머리말 */}
      <div className='flex flex-col h-screen'>
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </div>
    </>
  )
}
