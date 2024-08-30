import LayoutMypage from '@/component/layoutMypage'

export default function Mypage() {
  return <h1>내 지면</h1>
}

Mypage.getLayout = (page) => <LayoutMypage>{page}</LayoutMypage>
