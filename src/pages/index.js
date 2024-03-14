import LandingLayout from '@/component/landingLayout'
import Link from 'next/link'
import LandingFooter from '@/component/landing/landingFooter'

// 홈 화면
export default function Root() {
  return (
    <>
      <main className='flex-grow'>
        <div className='my-0 py-16'>
          랜딩 페이지 인덱스 화면
          <Link href='/admin/home' className='btn'>
            어드민으로 들어가ㅇㅁㅇㄹ
          </Link>
        </div>
        <LandingFooter />
      </main>
    </>
  )
}

Root.getLayout = (page) => <LandingLayout>{page}</LandingLayout>
