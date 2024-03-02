import Header from '@/component/header';
import DashboardHeader from '@/component/dashboard/dashboardHeader';

export default function DashboardLayout ({children}) {
    return (
        <>
        <DashboardHeader/>
        {children}</>)
}
