import DashboardHeader from '@/component/admin/dashboardNav'
import DashboardLayout from '@/component/dashboardLayout'
import Layout from '@/component/layout'

export default function MakeAccount() {
  return (
    <div className='flex-grow w-full'>
      <DashboardHeader />
      <div>계정 추가 화면</div>
    </div>
  )
}

MakeAccount.getLayout = (page) => (
  <Layout>
    <DashboardLayout>{page}</DashboardLayout>
  </Layout>
)
