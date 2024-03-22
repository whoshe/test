import MypageHeader from '@/component/mypage/mypageHeader'
import MypageFooter from '@/component/mypage/mypageFooter'

export default function MypageLayout({ children }) {
  return (
    <div className='flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16'>
      <MypageHeader />
      <div className='flex-grow'>
        <main className='my-0 py-16'>{children}</main>
      </div>
      <MypageFooter />
    </div>
  )
}
