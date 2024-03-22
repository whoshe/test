import AdminFooter from '@/component/admin/adminFooter'
import AdminHeader from '@/component/admin/adminHeader'
import LayoutAdmin from '@/component/layoutAdmin'
import Layout from '@/component/drawer/drawerLayout'

export default function Home() {
  return (
    <main className='drawer-content flex flex-col min-h-screen items-center justify-center'>
      <div className='flex-grow w-full'>관리자 대문 화면</div>
    </main>
  )
}

Home.getLayout = (page) => {
  return (
    <Layout>
      <LayoutAdmin>{page}</LayoutAdmin>
    </Layout>
  )
}
