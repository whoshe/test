import Layout from '@/component/layout'

export default function Login() {
  return (
    <section className='flex justify-center items-center'>
      <h1>로그인 지면</h1>
    </section>
  )
}
Login.getLayout = (page) => <Layout>{page}</Layout>
