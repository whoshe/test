import '@/styles/globals.css'

// 로컬 폰트
import localFont from 'next/font/local'
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
    <div className={`${pretendard.variable} font-sans`}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  )
}
