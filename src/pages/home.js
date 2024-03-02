import Layout from '@/component/layout'

export default function Home () {
    return (<main>홈 메인 화면</main>)
  }

  Home.getLayout = (page) => {
    return (<Layout>{page}</Layout>)
  }
