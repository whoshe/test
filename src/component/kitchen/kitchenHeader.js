import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function KitchenHeader() {
  const items = [
    {
      id: '0',
      name: '전체',
      path: '/',
    },
    {
      id: '1',
      name: '입력',
      path: '/kitchen/input',
    },
    {
      id: '2',
      name: '검색',
      path: '/kitchen/combo',
    },
    {
      id: '3',
      name: '기타',
      path: '/kitchen/etc',
    },
    {
      id: '4',
      name: '리액트',
      path: '/kitchen/reactTest',
    },
  ]
  const router = useRouter()
  console.log(router.pathname)

  return (
    <>
      <h1 className='text-3xl'>부엌</h1>
      <section className='p-2'>
        <div className='overflow-x-auto'>
          <ul className='flex flex-nowrap gap-2'>
            {items.map((item) => (
              <React.Fragment key={item.id}>
                <li
                  key={item.id}
                  onClick={() => {
                    router.push(item.path)
                  }}
                  className={
                    router.pathname === item.path
                      ? 'btn btn-sm btn-ghost text-primary text-lg whitespace-nowrap'
                      : 'btn btn-sm btn-outline text-lg whitespace-nowrap'
                  }
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
