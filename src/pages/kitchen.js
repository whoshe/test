import LayoutAdmin from '@/component/layoutAdmin'
import Layout from '@/component/layout'
import Link from 'next/link'
import KitchenNav from '@/component/kitchen/kitchenNav'

export default function Kitchen() {
  return (
    <>
      <KitchenNav />
      <section>
        {/* 부엌 조리대 */}
        <div className='mx-auto py-12'>
          <h2 className='text-xl'>조리대 전체 목록</h2>
        </div>
      </section>
    </>
  )
}

Kitchen.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
