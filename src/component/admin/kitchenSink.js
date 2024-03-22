import LayoutAdmin from '@/component/layoutAdmin'
import Layout from '@/component/drawer/drawerLayout'
import Link from 'next/link'

import { Menus, Items } from '@/component/menus'
import { useRouter } from 'next/router'
import InputSink from './inputSink'

export default function KitchenSink() {
  const items = [
    {
      id: '1',
      name: 'Input',
      path: '/admin/kitchen',
    },
    {
      id: '2',
      name: '아이템 2',
      path: '',
    },
  ]
  const router = useRouter()
  console.log(router.pathname)

  return (
    <>
      <h1 className='text-3xl'>조리대</h1>
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
      <InputSink />
    </>
  )
}
