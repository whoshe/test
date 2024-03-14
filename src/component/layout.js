import Header from '@/component/header'
import Home from '@/pages/admin/home'
import Sidebar from '@/component/sidebar'
import FooterLayout from './newsletterLayout'
import Footer from './footer'
import { Router } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <Sidebar />
      {children}
    </div>
  )
}
