import LayoutMypage from '@/component/layoutMypage'

export default function Mypage() {
  return <main>내 지면</main>
}

Mypage.getLayout = (page) => <LayoutMypage>{page}</LayoutMypage>
