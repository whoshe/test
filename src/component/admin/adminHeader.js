import Link from 'next/link'

export default function Header() {
  return (
    <>
      <nav className='flex justify-between items-center w-full'>
        <div>
          <label htmlFor='my-drawer-2' className='btn btn-primary drawer-button lg:hidden'>
            Open drawer
          </label>
          <Link href='/admin/' className='btn btn-ghost'>
            관리자 집으로
          </Link>
        </div>
        <ul className='flex'>
          <li>메뉴 1</li>
          <li>메뉴 2</li>
        </ul>
      </nav>
    </>
  )
}
