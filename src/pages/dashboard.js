import DashboardLayout from '@/component/dashboard/dashboardLayout';
import Layout from '@/component/layout'

export default function Dashboard () {
    return (
    <main>대시보드 화면</main>
    )
}

Dashboard.getLayout = (page) => (
    <Layout>
        <DashboardLayout>{page}</DashboardLayout>
    </Layout>
)
