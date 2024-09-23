import AdminFooter from '@/component/admin/adminFooter'
import AdminHeader from '@/component/admin/adminHeader'
import LayoutAdmin from '@/component/layoutAdmin'
import Layout from '@/component/drawer/drawerLayout'
import { NextSeo } from 'next-seo'

export default function Welcome() {
  return (
    <>
      <NextSeo
        title='관리실'
        openGraph={{
          url: '',
          images: [{ url: '' }],
        }}
      />
      <section>
        <h1 className='text-3xl'>어서오세요 관리자 님,</h1>
      </section>
    </>
  )
}

Welcome.getLayout = (page) => {
  return (
    <Layout>
      <LayoutAdmin>{page}</LayoutAdmin>
    </Layout>
  )
}
