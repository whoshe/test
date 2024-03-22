import LayoutAdmin from '@/component/layoutAdmin'
import Layout from '@/component/drawer/drawerLayout'
import Link from 'next/link'
import KitchenSink from '@/component/kitchen/kitchenSink'

export default function Kitchen() {
  return (
    <section>
      <KitchenSink />
    </section>
  )
}

Kitchen.getLayout = (page) => {
  return (
    <Layout>
      <LayoutAdmin>{page}</LayoutAdmin>
    </Layout>
  )
}
