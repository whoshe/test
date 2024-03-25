import Link from 'next/link'
import Layout from '@/component/layout'
import KitchenHeader from '@/component/kitchen/kitchenHeader'

// 홈 화면
export default function Root() {
  return (
    <>
      <KitchenHeader />
      {/* 환영 인사 */}
      <section className='p-2'>
        <div class='p-6'>
          <h2 class='text-neutral-400 font-bold'>실험실에 오신 것을 환영합니다.</h2>
        </div>
      </section>
    </>
  )
}

Root.getLayout = (page) => <Layout>{page}</Layout>
