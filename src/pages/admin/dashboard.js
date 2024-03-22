import DashboardHeader from '@/component/admin/dashboardHeader'
import LayoutAdmin from '@/component/layoutAdmin'
import Layout from '@/component/drawer/drawerLayout'

export default function Dashboard() {
  return (
    <div className='flex-grow w-full'>
      <DashboardHeader />
      현황판 내용
    </div>
  )
}

Dashboard.getLayout = (page) => (
  <Layout>
    <LayoutAdmin>{page}</LayoutAdmin>
  </Layout>
)
