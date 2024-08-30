import Link from 'next/link'
import { CustomPlaceholder } from 'react-placeholder-image'

export default function Header() {
  return (
    <>
      <header className='bg-gradient-to-t from-base-100 to-green-300 dark:to-green-800 py-16'>
        <div className='hero h-96'>
          <div className='hero-content flex-col md:flex-row-reverse'>
            <figure>
              <CustomPlaceholder
                className='lg:max-w-2xl rounded-lg shadow-2xl'
                width={450}
                height={450}
              />
            </figure>
            <div>
              <h1 className='text-5xl font-bold'>지금 시작합니다!</h1>
              <p className='py-6 text-lg'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className='btn btn-primary'>Get Started</button>
            </div>
            {/* <div className='mx-auto max-w-xl flex flex-col justify-center'>
              <h1 className='text-6xl text-center'>Box Office News!</h1>
              <p className='py-6 text-center'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className='btn btn-primary'>Get Started</button>
            </div> */}
          </div>
        </div>
        <div className=''>
          <nav className='navbar mx-auto max-w-7xl'>
            {/* 탐색 */}
            <h1 className='btn btn-ghost text-2xl'>실험실</h1>
            <div className='flex-1'>
              <div>
                <Link href='/' className='btn btn-ghost text-lg'>
                  집으로
                </Link>
                <Link href='/landing' className='btn btn-ghost text-lg'>
                  내 지면
                </Link>
                <Link href='/admin' className='btn btn-ghost text-lg'>
                  관리자로
                </Link>
              </div>
            </div>
            <div className='flex-none'>
              <div tabIndex='0' role='button' className='btn btn-ghost btn-circle avatar'>
                <figure className='avatar'>
                  <div className='mask mask-squircle'>
                    <CustomPlaceholder
                      className='max-w-sm rounded-lg shadow-2xl'
                      width={40}
                      height={40}
                    />
                  </div>
                </figure>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
