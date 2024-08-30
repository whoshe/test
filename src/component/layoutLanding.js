import Header from '@/component/landing/landingHeader'
import Footer from '@/component/landing/landingFooter'

export default function LayoutLanding({ children }) {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='grow'>{children}</main>
      <Footer />
    </div>
  )
}
