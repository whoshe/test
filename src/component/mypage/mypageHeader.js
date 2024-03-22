import Link from 'next/link'

export default function MypageHeader() {
  return (
    <>
      <nav className='flex gap-8 justify-center items-center'>
        <Link href='/' className='btn btn-ghost'>
          집으로
        </Link>
        <Link href='/' className='btn btn-ghost'>
          내 지면
        </Link>
        <h1>내 지면 머리글</h1>
      </nav>
    </>
  )
}
