import Layout from '@/component/layout'
import { NextSeo } from 'next-seo'

export default function Mypage() {
  return (
    <>
      <NextSeo
        title='내 마당'
        openGraph={{
          url: '',
          images: [{ url: '' }],
        }}
      />
      <section className='flex justify-center items-center'>
        <h1>내 마당</h1>
      </section>
    </>
  )
}

Mypage.getLayout = (page) => <Layout>{page}</Layout>
