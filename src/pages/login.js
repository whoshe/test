import Layout from '@/component/layout'
import { NextSeo } from 'next-seo'

export default function Login() {
  return (
    <>
      <NextSeo
        title='로그인하기'
        openGraph={{
          url: '',
          images: [{ url: '' }],
        }}
      />
      <section className='flex justify-center items-center'>
        <h1>로그인 지면</h1>
      </section>
    </>
  )
}
Login.getLayout = (page) => <Layout>{page}</Layout>
