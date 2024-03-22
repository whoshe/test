import Sidebar from '@/component/drawer/sidebar'

export default function Layout({ children }) {
  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <Sidebar />
      {children}
    </div>
  )
}
