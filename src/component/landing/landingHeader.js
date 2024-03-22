import Link from 'next/link'

export default function LandingHeader() {
  return (
    <>
      <nav className='flex gap-8 justify-center items-center'>
        <h1 className='text-3xl'> 내 지면 </h1>
        <Link href='/' className='btn btn-ghost'>
          집으로
        </Link>
        <Link href='/mypage' className='btn btn-ghost'>
          내 지면
        </Link>
        <Link href='/admin' className='btn btn-ghost'>
          관리자로
        </Link>
      </nav>
    </>
  )
}
