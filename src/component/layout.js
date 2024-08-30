import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex-grow'>
        <main className='my-0 py-16'>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
