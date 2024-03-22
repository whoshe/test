import AdminFooter from '@/component/admin/adminFooter'
import AdminHeader from '@/component/admin/adminHeader'
import LayoutAdmin from '@/component/layoutAdmin'
import Layout from '@/component/drawer/drawerLayout'

export default function Welcome() {
  return (
    <section>
      <h1 className='text-3xl'>어서오세요 관리자 님,</h1>
    </section>
  )
}

Welcome.getLayout = (page) => {
  return (
    <Layout>
      <LayoutAdmin>{page}</LayoutAdmin>
    </Layout>
  )
}
