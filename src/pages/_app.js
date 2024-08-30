import '@/styles/globals.css'
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID
// 로컬 폰트
import localFont from 'next/font/local'
import Script from 'next/script'

const pretendard = localFont({
  //   src: '../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2',
  //   display: 'swap',
  //   weight: '45 920',
  src: [
    {
      path: '../../node_modules/pretendard/dist/web/static/woff2-subset/Pretendard-Regular.subset.woff2',
      weight: '400',
    },
    {
      path: '../../node_modules/pretendard/dist/web/static/woff2-subset/Pretendard-Bold.subset.woff2',
      weight: '700',
    },
  ],
  display: 'swap',
  variable: '--font-pretendard',
})

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
      `}
      </Script>
      <div className={`${pretendard.variable} font-sans`}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </>
  )
}
