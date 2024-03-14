import DashboardHeader from '@/component/admin/dashboardNav'
import DashboardLayout from '@/component/dashboardLayout'
import Layout from '@/component/layout'

export default function Account() {
  return (
    <div className='flex-grow w-full'>
      <DashboardHeader />
      <div>계정 목록 화면</div>
    </div>
  )
}

Account.getLayout = (page) => (
  <Layout>
    <DashboardLayout>{page}</DashboardLayout>
  </Layout>
)
