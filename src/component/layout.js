import Header from '@/component/header';
import Home from '@/pages/home';
import Sidebar from '@/component/sidebar';
import FooterLayout from './newsletter/newsletterLayout';
import Footer from './footer';

export default function Layout({children}) {
    return (<div>
        <Sidebar/>
        <Header/>
        {children}
        <Footer/>
        </div>)
}