import Link from 'next/link'
import Layout from '@/component/layout'

// 홈 화면
export default function Root() {
  return (
    <>
      <main>
        <div className='flex gap-4'>
          <section>실험실에 오신 것을 환영합니다.</section>
        </div>
      </main>
    </>
  )
}

Root.getLayout = (page) => <Layout>{page}</Layout>
