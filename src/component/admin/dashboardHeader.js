import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menus, Items } from '@/component/menus'

export default function DashboardHeader() {
  const items = [
    {
      id: '1',
      name: '집',
      path: '/',
    },
    {
      id: '2',
      name: '현황판',
      path: '/admin/dashboard',
    },
    {
      id: '3',
      name: '회원',
      path: '/admin/account',
    },
    {
      id: '4',
      name: '회원 추가',
      path: '/admin/account',
    },
    {
      id: '5',
      name: '내 지면',
      path: '/admin/account',
    },
    {
      id: '6',
      name: '메뉴 6',
      path: '/admin/account',
    },
  ]
  const router = useRouter()
  console.log(router.pathname)

  return (
    <>
      <nav className='flex items-center'>
        <h1 className='text-3xl mr-4'>현황판</h1>
      </nav>
      <div>
        {items.map((item) => (
          <>
            <Link href={item.path}>
              <button
                key={item.id}
                onClick={() => {
                  router.push(item.path)
                }}
                className={
                  router.pathname === item.path
                    ? 'btn btn-sm btn-ghost text-primary text-lg'
                    : 'btn btn-sm btn-ghost text-lg'
                }
              >
                {item.name}
              </button>
            </Link>
          </>
        ))}
      </div>
      <div>
        <h1 className='text-3xl mr-4'>
          {items.map((item) => (
            <>{router.pathname === item.path ? item.name : ''}</>
          ))}
        </h1>
      </div>
    </>
  )
}
