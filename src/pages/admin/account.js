import AccountHeader from '@/component/admin/accountHeader'
import DashboardLayout from '@/component/layoutAdmin'
import Layout from '@/component/drawer/drawerLayout'

export default function Account() {
  return (
    <section className='flex-grow w-full'>
      <AccountHeader />
      <div>계정 목록 화면</div>
    </section>
  )
}

Account.getLayout = (page) => (
  <Layout>
    <DashboardLayout>{page}</DashboardLayout>
  </Layout>
)
