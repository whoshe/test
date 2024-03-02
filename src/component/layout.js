import Header from '@/component/header';
import Home from '@/pages/home';
import Sidebar from '@/component/sidebar';
import FooterLayout from './newsletter/newsletterLayout';
import Footer from './footer';

export default function Layout({children}) {
    return (
    <div className="flex border-8 min-h-screen ">
    <aside className="flex-[3] border border-primary bg-gray-200">
      {/* Include shared UI here e.g. a sidebar */}
      
      <Sidebar/> 
    </aside>
    <div className="flex flex-col flex-[7] border border-red-500 bg-red-100">
    <Header/>
    <div className="flex-grow my-0 py-16 border-8">{children}</div>
    <Footer />
    </div>
  </div>)
}