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
            <Sidebar/> 
        <div className="drawer-content flex flex-col min-h-screen items-center justify-center">
        
            <Header/>
            <div className="flex-grow w-full">{children}</div>
            <Footer />
    
        </div>
    </div>)
}