import { Sidebar } from '@/component/drawer/sidebar'
import AdminFooter from '@/component/admin/adminFooter'
import AdminHeader from '@/component/admin/adminHeader'

export default function DashboardLayout({ children }) {
  return (
    <main className='drawer-content flex flex-col min-h-screen items-center justify-center'>
      <AdminHeader />
      {children}
      <AdminFooter />
    </main>
  )
}
