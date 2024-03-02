import DashboardLayout from '@/component/dashboard/dashboardLayout';
import Layout from '@/component/layout'

export default function Account () {
    return (
    <main>대시보드 계정 화면</main>
    )
}

Account.getLayout = (page) => (
    <Layout>
        <DashboardLayout>{page}</DashboardLayout>
    </Layout>
)
