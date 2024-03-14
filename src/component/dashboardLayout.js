import DashboardHeader from '@/component/admin/dashboardNav'
import { Sidebar } from '@/component/sidebar'
import Footer from '@/component/footer'
import Header from '@/component/header'

export default function DashboardLayout({ children }) {
  return (
    <main className='drawer-content flex flex-col min-h-screen items-center justify-center'>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
