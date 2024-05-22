import Link from 'next/link'

export default function Header() {
  return (
    <>
      <nav className='flex gap-8 justify-start items-center'>
        <h1 className='text-3xl'> 자습서 </h1>
        <div>
          <Link href='/' className='btn btn-ghost'>
            집으로
          </Link>
          <Link href='/mypage' className='btn btn-ghost'>
            내 지면
          </Link>
          <Link href='/admin' className='btn btn-ghost'>
            관리자로
          </Link>
        </div>
      </nav>
    </>
  )
}
