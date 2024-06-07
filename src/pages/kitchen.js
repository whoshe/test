import LayoutAdmin from '@/component/layoutAdmin'
import Layout from '@/component/layout'
import Link from 'next/link'
import KitchenHeader from '@/component/kitchen/kitchenHeader'

export default function Kitchen() {
  return (
    <>
      <KitchenHeader />
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
