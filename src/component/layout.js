import Header from '@/component/header';
import Home from '@/pages/home';
import Sidebar from '@/component/sidebar';
import FooterLayout from './newsletter/newsletterLayout';
import Footer from './footer';
import { Router } from 'react-router-dom';

export default function Layout({children}) {
    return (
    <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <aside className="drawer-side">
        {/* Include shared UI here e.g. a sidebar */}
            <Sidebar/> 
        </aside>
        <div className="drawer-content flex flex-col items-center justify-center">
        
            <Header/>
            <div className="flex-grow my-0 border-8 w-full">{children}</div>
            <Footer />
    
        </div>
    </div>)
}