import LandingLayout from '@/component/layoutLanding'
import Link from 'next/link'
import LandingFooter from '@/component/landing/landingFooter'

// 홈 화면
export default function Root() {
  return (
    <>
      <main className='flex-grow'>
        <h1 className='text-4xl'>실험실</h1>
        <div className='my-0 py-16'>
          <Link href='/admin/' className='btn'>
            관리자 지면으로
          </Link>
          <Link href='/mypage' className='btn btn-ghost'>
            내 지면으로
          </Link>
        </div>
        <LandingFooter />
      </main>
    </>
  )
}

Root.getLayout = (page) => <LandingLayout>{page}</LandingLayout>
