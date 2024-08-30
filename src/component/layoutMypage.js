import LandingHeader from '@/component/landing/landingHeader'
import LandingFooter from '@/component/landing/landingFooter'

export default function MypageLayout({ children }) {
  return (
    <div className='flex flex-col h-screen'>
      <LandingHeader />
      <div className='flex-grow'>
        <main className='my-0 py-16'>{children}</main>
      </div>
      <LandingFooter />
    </div>
  )
}
