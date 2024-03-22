import DashboardHeader from '@/component/admin/dashboardHeader'
import LayoutAdmin from '@/component/layoutAdmin'
import Layout from '@/component/drawer/drawerLayout'

export default function Dashboard() {
  return (
    <section>
      <h1 className='text-3xl'>현황판입니다.</h1>
    </section>
  )
}

Dashboard.getLayout = (page) => (
  <Layout>
    <LayoutAdmin>{page}</LayoutAdmin>
  </Layout>
)
