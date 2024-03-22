import AccountNav from '@/component/admin/accountHeader'
import LayoutAdmin from '@/component/layoutAdmin'
import Layout from '@/component/drawer/drawerLayout'

export default function MakeAccount() {
  return (
    <section className='flex-grow w-full'>
      <AccountNav />
      <div>계정 추가 화면</div>
    </section>
  )
}

MakeAccount.getLayout = (page) => (
  <Layout>
    <LayoutAdmin>{page}</LayoutAdmin>
  </Layout>
)
