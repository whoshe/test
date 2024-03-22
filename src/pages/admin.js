import LayoutLanding from '@/component/layoutLanding'
import Link from 'next/link'

// 홈 화면
export default function Login() {
  return (
    <>
      <main className='flex-grow'>
        <div className='flex gap-4'>
          <h1 className='text-4xl'>실험실 관리자</h1>
          <Link href='/' className='btn btn-ghost'>
            집으로
          </Link>
          <Link href='/mypage' className='btn btn-ghost'>
            내 지면으로
          </Link>
        </div>
        <div className='my-0 py-16'>
          <Link href='/admin/welcome' className='btn'>
            관리자 로그인하기
          </Link>
        </div>
      </main>
    </>
  )
}

Login.getLayout = (page) => <LayoutLanding>{page}</LayoutLanding>
