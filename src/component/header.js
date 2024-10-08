import Link from 'next/link'
import { CustomPlaceholder } from 'react-placeholder-image'
import { BeakerIcon } from '@heroicons/react/24/outline'

// 탐색 메뉴
const navData = [
  {
    title: '홈',
    link: 'https://www.bookshopmap.com',
  },
  {
    title: '부엌',
    link: '/',
  },
  {
    title: '광고',
    link: '/ads',
  },
  {
    title: '관리실',
    link: '/admin',
  },
  {
    title: '블로그',
    link: '/blog',
  },
]
export default function Header() {
  return (
    <>
      <header className='bg-gradient-to-t from-base-100 to-green-200 dark:to-green-800'>
        <nav className='navbar mx-auto max-w-7xl'>
          {/* 탐색 */}
          <Link href='/' className='btn btn-sm max-sm:btn-square btn-ghost text-2xl'>
            <figure>
              <BeakerIcon className='h-8 w-8' width={24} height={24} alt='Bookshopmap Lab' />
            </figure>
            <span className='max-sm:hidden'>연습장</span>
          </Link>
          <ul className='flex-1'>
            {navData.map((menu, key) => {
              return (
                <li key={key}>
                  <Link href={menu.link} className='btn btn-ghost text-lg'>
                    {menu.title}
                  </Link>
                </li>
              )
            })}
            {/* <Link href='/ads' className='btn btn-ghost text-lg'>
                광고
              </Link>
              <Link href='/admin' className='btn btn-ghost text-lg'>
                관리실
              </Link> 
            </li>*/}
          </ul>
          <div className='flex-none'>
            <div className='dropdown dropdown-end'>
              <div tabIndex='0' role='button' className='btn btn-ghost btn-circle avatar z-0'>
                <figure className='avatar online placeholder'>
                  <div className='bg-neutral-400 w-10 rounded-full hover:ring ring-primary ring-offset-2'>
                    <span className='text-2xl text-neutral-content'>B</span>
                  </div>
                </figure>
              </div>
              <ul
                tabIndex='0'
                className='menu menu-lg dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-80 shadow-lg'
              >
                <li key='1'>
                  <Link href='/mypage' className='justify-between'>
                    내 마당
                    <span className='badge'>새로운</span>
                  </Link>
                </li>
                <li key='2'>
                  <a>설정</a>
                </li>
                <li key='3'>
                  <Link href='/login'>로그인하기</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
