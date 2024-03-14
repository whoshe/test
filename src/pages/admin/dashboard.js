import DashboardHeader from '@/component/admin/dashboardNav'
import DashboardLayout from '@/component/dashboardLayout'
import Layout from '@/component/layout'

export default function Dashboard() {
  return (
    <div className='flex-grow w-full'>
      <DashboardHeader />
      <div>대시보드 메인 화면</div>
    </div>
  )
}

Dashboard.getLayout = (page) => (
  <Layout>
    <DashboardLayout>{page}</DashboardLayout>
  </Layout>
)
