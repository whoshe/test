import LandingHeader from '@/component/landing/landingHeader'
import Footer from './footer'
import Header from './header'

export default function LayoutLanding({ children }) {
  return (
    <main className='flex flex-col min-h-screen'>
      <div className='flex-grow mx-auto jusify-center content-center'>{children}</div>
      <div className='mx-auto max-w-2xl'>
        <Footer />
      </div>
    </main>
  )
}
