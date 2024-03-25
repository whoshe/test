import KitchenHeader from '@/component/kitchen/kitchenHeader'
import Layout from '@/component/layout'
import LayoutAdmin from '@/component/layoutAdmin'
import BI from '/public/img/logo.svg'
import React from 'react'
import { Fragment, useEffect, useLayoutEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import {
  MapPinIcon,
  MagnifyingGlassIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

const people = ['대전 유성', '서울 마포구', '서울 강서구', '합정', '세종특별자치시 한누리대로']

export default function Etc() {
  // Hydration 에러 방지 안되네
  // const [isClient, setIsClient] = useState(false)

  // useEffect(() => {
  //   setIsClient(true)
  // }, [])

  // // useEffect와 useEffect 비교 사용 예제
  const [effect, setEffect] = useState('')
  const [layoutEffect, setLayoutEffect] = useState('')

  useEffect(() => {
    setEffect('useEffect')
  }, [])

  useLayoutEffect(() => {
    setLayoutEffect('useLayoutEffect')
  }, [])

  // This function will be called when the button is clicked
  const [state, setState] = useState(false)

  const handleClick = () => {
    setState(!state)
  }

  // 콤보박스 with Headless UI
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <>
      <KitchenHeader />
      <section>
        <div className='p-2'>
          <h2 className='text-2xl font-bold'>기타</h2>
        </div>
      </section>
      <article className='m-2'>
        <div className='py-2 prose'>
          <h1>제목 Prose h1</h1>
          <h2>제목 h2</h2>
          <h3>제목 h3</h3>
          <h4>제목 h4</h4>
          <p>
            문장 prose 사례 보기
            <code>code</code>
          </p>
          <p>
            `이런 폰트는 어떠세요?` But a recent study shows that the celebrated appetizer may be
            linked to a series of rabies cases springing up around the country.
          </p>
          <ol className=''>
            <li>첫 번째</li>
            <li>두 번째</li>
          </ol>
          <p className='prose-lg'>
            `이런 폰트는 어떠세요?` But a recent study shows that the celebrated appetizer may be
            linked to a series of rabies cases springing up around the country.
          </p>
        </div>
      </article>
      {/* 반응형 모달 */}
      <section className='p-2'>
        <div className='py-2'>
          <h3 className='text-xl font-bold'>반응형 모달</h3>
        </div>
        {/* 반응형 Modal */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className='btn' onClick={() => document.getElementById('my_modal_2').showModal()}>
          open modal
        </button>
        <dialog id='my_modal_2' className='modal modal-bottom sm:modal-middle'>
          <div className='modal-box'>
            <h3 className='font-bold text-lg'>Hello!</h3>
            <p className='py-4'>Press ESC key or click the button below to close</p>{' '}
            <div className='modal-action'>
              <form method='dialog'>
                {/* if there is a button in form, it will close the modal */}
                <button className='btn'>Close</button>
              </form>
            </div>
          </div>
          <form method='dialog' className='modal-backdrop'>
            <button>close</button>
          </form>
        </dialog>
      </section>
      {/* 서랍 */}
      <section>
        <div className='py-2'>
          <h3 className='text-xl font-bold'>서랍</h3>
        </div>
        <div className='drawer'>
          <input id='left-side-drawer' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content'>
            <div className='flex justify-between'>
              <div>
                <label htmlFor='left-side-drawer' className='drawer-button btn btn-primary'>
                  Open Left drawer
                </label>
              </div>
              <div>
                <label htmlFor='right-side-drawer' className='drawer-button btn btn-primary'>
                  Open Right drawer
                </label>
              </div>
            </div>
          </div>
          <div className='drawer-side'>
            <label htmlFor='left-side-drawer' className='drawer-overlay'></label>
            <ul className='menu p-4 w-80 bg-base-100 text-base-content h-full'>
              <li>Left Sidebar Item 1</li>
              <li>Left Sidebar Item 2</li>
            </ul>
          </div>
        </div>
        <div className='drawer drawer-end'>
          <input id='right-side-drawer' type='checkbox' className='drawer-toggle' />
          <div className='drawer-side'>
            <label htmlFor='right-side-drawer' className='drawer-overlay'></label>
            <ul className='menu p-4 w-80 bg-base-100 text-base-content h-screen'>
              <li>Sidebar Item 1</li>
              <li>Sidebar Item 2</li>
            </ul>
          </div>
        </div>
      </section>
      {/* 카드 내 버튼 액션 */}
      <section>
        <div className='py-2'>
          <h3 className='text-xl font-bold'>버튼 액션</h3>
        </div>
        <Link href=''>
          <div className='card lg:card-side bg-base-300 shadow-xl image-full z-0'>
            <figure>
              <Image
                width={120}
                height={120}
                className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
                src='/img/hologram-sticker.png'
                alt='Movie'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className='card-actions justify-end'>
                <button
                  className={'btn ' + (state ? 'btn-primary' : 'btn-warning')}
                  onClick={handleClick}
                >
                  {state ? 'Active' : 'Inactive'}
                </button>
              </div>
            </div>
          </div>
        </Link>
      </section>
      <div className='py-2'>
        <h3 className='text-xl font-bold'>이펙트 비교</h3>
      </div>
      <section>
        <div className='text-4xl'>
          이것은 <span className='text-primary'>{effect}</span> 입니다.
        </div>
        <div className='text-4xl'>
          이것은 <span className='text-primary'>{layoutEffect}</span> 입니다.
        </div>
      </section>
      {/* 채팅 */}
      <section>
        <div className='py-2'>
          <h3 className='text-xl font-bold'>채팅 및 스왑 버튼</h3>
        </div>
        <div>
          <div className='chat chat-start'>
            <div className='chat-image avatar'>
              <div className='w-10 rounded-full'>
                <Image alt='user' width={10} height={10} src='/img/member1.png' />
              </div>
            </div>
            <div className='chat-header'>
              이응셋
              <time className='text-xs opacity-50 ml-1'>2시간 전</time>
            </div>
            <div className='chat-bubble'>니가 이걸 만들었다니 대단한 걸!</div>
            <div className='chat-footer opacity-50'>전송됨</div>
          </div>
          <div className='chat chat-end'>
            <div className='chat-image avatar'>
              <div className='w-10 rounded-full'>
                <Image alt='user' width={10} height={10} src='/img/member2.png' />
              </div>
            </div>
            <div>
              <label className='swap'>
                <input type='checkbox' />
                <span className='swap-on'>ON</span>
                <span className='swap-off'>OFF</span>
              </label>
            </div>
            <div className='chat-header'>
              푸르공
              <time className='text-xs opacity-50 ml-1'>12:46</time>
            </div>
            <div className='chat-bubble'>우리 헤어져!</div>
            <div className='chat-footer opacity-50'>1분 전에 봄</div>
          </div>
        </div>
      </section>
    </>
  )
}

Etc.getLayout = (page) => <Layout>{page}</Layout>
