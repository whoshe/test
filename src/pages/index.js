import Link from 'next/link'
import Layout from '@/component/layout'
import KitchenHeader from '@/component/kitchen/kitchenHeader'

// 홈 화면
export default function Root() {
  return (
    <>
      <KitchenHeader />
      {/* 환영 인사 */}
      <section className='card w-full bg-base-100 shadow-md'>
        <div className='p-4 card-body'>
          <Welcome name='남반장' />
          <h3 className='text-xl'>연습장에 오신 것을 환영합니다.</h3>
        </div>
      </section>
    </>
  )
}

function Welcome({ name }) {
  return (
    <>
      <h3 className='text-xl'>어서오세요 {name} 님,</h3>
    </>
  )
}

Root.getLayout = (page) => <Layout>{page}</Layout>
