import Link from 'next/link'
import LayoutAdmin from '@/component/layoutAdmin'
import Layout from '@/component/layout'
// 홈 화면
export default function Login() {
  return (
    <>
      <section className='flex justify-center items-center'>
        <nav className='flex gap-4 mx-auto max-w-2xl'>
          <Link href='/admin/welcome' className='btn text-lg'>
            관리실 로그인하기
          </Link>
          <Link href='/' className='btn btn-ghost text-lg'>
            돌아가기
          </Link>
        </nav>
      </section>
    </>
  )
}

Login.getLayout = (page) => <Layout>{page}</Layout>
