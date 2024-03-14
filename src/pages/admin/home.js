import Footer from '@/component/footer'
import Header from '@/component/header'
import Layout from '@/component/layout'

export default function Home() {
  return (
    <main className='drawer-content flex flex-col min-h-screen items-center justify-center'>
      <Header />
      <div className='flex-grow w-full'>어드민 메인 화면</div>
      <Footer />
    </main>
  )
}

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
