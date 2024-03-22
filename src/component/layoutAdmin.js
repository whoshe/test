import { Sidebar } from '@/component/drawer/sidebar'
import AdminFooter from '@/component/admin/adminFooter'
import AdminHeader from '@/component/admin/adminHeader'

export default function DashboardLayout({ children }) {
  return (
    <main className='drawer-content flex flex-col min-h-screen items-center justify-center'>
      <AdminHeader />
      <div className='flex-grow w-full'>{children}</div>
      <AdminFooter />
    </main>
  )
}
