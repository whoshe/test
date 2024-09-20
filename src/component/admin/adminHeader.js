import Link from 'next/link'

export default function Header() {
  return (
    <>
      <nav className='flex justify-between items-center w-full'>
        <div>
          <label htmlFor='my-drawer-2' className='btn btn-primary drawer-button lg:hidden'>
            메뉴
          </label>
          <Link href='/admin/' className='btn btn-ghost'>
            관리실
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
