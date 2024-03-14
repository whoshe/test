import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menus, Items } from '@/component/menus'

export default function DashboardHeader() {
  const items = [
    {
      id: '1',
      name: '목록',
      path: '/admin/account',
    },
    {
      id: '2',
      name: '추가',
      path: '/admin/accountMake',
    },
  ]
  const router = useRouter()
  console.log(router.pathname)

  return (
    <>
      <nav className='flex items-center'>
        <h1 className='text-3xl mr-4'>
          회원{' '}
          {items.map((item) => (
            <>{router.pathname === item.path ? item.name : ''}</>
          ))}
        </h1>
        {/* Sidebar content here */}
        {items.map((menu, index) => {
          return (
            <Link href={menu.path} key={index}>
              <Items menu={menu} isActive={router.pathname === menu.path ? true : false} />
            </Link>
          )
        })}
      </nav>

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
    </>
  )
}
