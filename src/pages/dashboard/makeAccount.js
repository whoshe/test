import DashboardLayout from '@/component/dashboard/dashboardLayout';
import Layout from '@/component/layout'

export default function MakeAccount () {
    return (
    <main>대시보드 계정 생성 화면</main>
    )
}

MakeAccount.getLayout = (page) => (
    <Layout>
        <DashboardLayout>{page}</DashboardLayout>
    </Layout>
)
