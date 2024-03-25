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
        <div class=' text-gray-900 px-6'>
          <div class='max-w-xl mx-auto py-12 md:max-w-4xl'>
            <h2 class='text-2xl font-bold'>조리대 전체 목록</h2>
          </div>
        </div>
      </section>
    </>
  )
}

Kitchen.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
