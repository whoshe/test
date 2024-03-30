import LayoutLanding from '@/component/layoutLanding'
import Link from 'next/link'

// 홈 화면
export default function Login() {
  return (
    <>
      <section className=''>
        <nav className='flex gap-4 mx-auto max-w-2xl'>
          <h1 className='text-4xl'>실험실 관리자</h1>
          <Link href='/' className='btn btn-ghost'>
            집으로
          </Link>
          <Link href='/mypage' className='btn btn-ghost'>
            내 지면으로
          </Link>
        </nav>
        <Link href='/admin/welcome' className='btn'>
          관리자 로그인하기
        </Link>
      </section>
    </>
  )
}

Login.getLayout = (page) => <LayoutLanding>{page}</LayoutLanding>
