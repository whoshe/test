import LandingHeader from '@/component/landing/landingHeader'
import Footer from './footer'
import Header from './header'

export default function LayoutLanding({ children }) {
  return (
    <div className='flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16'>
      <Header />
      <div className='flex-grow'>
        <main className='my-0 py-16'>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
