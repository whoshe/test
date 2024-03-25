import Menus from '@/component/menus'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Sidebar() {
  const router = useRouter()
  console.log(router.pathname)

  const menus = [
    { name: '관리자', path: '/admin/welcome' },
    { name: '현황판', path: '/admin/dashboard' },
    { name: '회원', path: '/admin/account' },
    { name: '회원추가', path: '/admin/accountMake' },
    { name: '부엌', path: '/kitchen' },
    { name: '내 지면', path: '/mypage' },
  ]

  return (
    <aside className='drawer-side '>
      <label htmlFor='my-drawer-2' aria-label='close sidebar' className='drawer-overlay'></label>
      <ul className='min-h-screen menu p-4 w-80 bg-base-200 text-base-content'>
        {/* Sidebar content here */}
        {menus.map((menu, index) => {
          return (
            <Link href={menu.path} key={index}>
              <Menus menu={menu} isActive={router.pathname === menu.path ? true : false} />
            </Link>
          )
        })}
      </ul>
    </aside>
  )
}
