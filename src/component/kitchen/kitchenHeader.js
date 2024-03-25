import Link from 'next/link'
import { useRouter } from 'next/router'

export default function KitchenHeader() {
  const items = [
    {
      id: '0',
      name: '전체',
      path: '/',
    },
    {
      id: '1',
      name: 'Input',
      path: '/kitchen/input',
    },
    {
      id: '2',
      name: 'Search',
      path: '/kitchen/combo',
    },
    {
      id: '3',
      name: 'Etc.',
      path: '/kitchen/etc',
    },
  ]
  const router = useRouter()
  console.log(router.pathname)

  return (
    <>
      <h1 className='text-3xl'>부엌</h1>
      <section className='flex p-2 gap-2'>
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
                    : 'btn btn-sm btn-outline text-lg'
                }
              >
                {item.name}
              </button>
            </Link>
          </>
        ))}
      </section>
    </>
  )
}
