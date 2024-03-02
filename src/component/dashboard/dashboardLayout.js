import Header from '@/component/header';
import DashboardHeader from './dashboardHeader';

export default function DashboardLayout ({children}) {
    return (
        <>
        <DashboardHeader/>
        {children}</>)
}
