import Link from 'next/link'
import { useRouter } from 'next/router'

export default function KitchenHeader() {
  const items = [
    {
      id: '0',
      name: '전체',
      path: '/admin/kitchen',
    },
    {
      id: '1',
      name: 'Input',
      path: '/admin/inputsink',
    },
    {
      id: '2',
      name: '기타',
      path: '',
    },
  ]
  const router = useRouter()
  console.log(router.pathname)

  return (
    <>
      <h1 className='text-3xl'>부엌</h1>
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
    </>
  )
}
