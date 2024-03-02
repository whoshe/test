import Layout from '@/component/layout'

export default function Home () {
    return (
    <main>홈 화면</main>
    )
}

Home.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>
)
