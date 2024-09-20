import Layout from '@/component/layout'

export default function Mypage() {
  return (
    <section className='flex justify-center items-center'>
      <h1>내 마당</h1>
    </section>
  )
}

Mypage.getLayout = (page) => <Layout>{page}</Layout>
