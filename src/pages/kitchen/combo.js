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

export default function Combo() {
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
      <section className='p-2'>
        <h2 className='text-2xl font-bold'>검색</h2>
        {/* 콤보박스 with Headless UI */}
        <div className='p-6'>
          <h2 className='text-neutral-400 font-bold'>실험실에 오신 것을 환영합니다.</h2>
        </div>

        <Combobox value={selectedPerson} onChange={setSelectedPerson}>
          {/* 검색어 입력  */}
          <div className='relative lg:my-2 container max-w-2xl'>
            <Combobox.Input
              type='search'
              onChange={(event) => setQuery(event.target.value)}
              className='input input-bordered text-lg lg:input-lg lg:text-2xl rounded-full w-full pl-10 pr-14 lg:pl-12 lg:pr-20 font-medium shadow'
            />
            <button className='absolute right-0 top-1/2 -translate-y-1/2 btn lg:btn-lg btn-ghost text-primary text-lg lg:text-xl rounded-full'>
              검색
            </button>
            {/** 확대경 아이콘 */}
            <div className='absolute left-3 top-1/2 -translate-y-1/2'>
              <MagnifyingGlassIcon className='w-5 lg:w-6' />
            </div>
          </div>
          {/* 검색어 제안  */}
          <Combobox.Options
            static
            tabIndex={0}
            className='container max-w-2xl z-[3] shadow left-0 right-0 rounded-xl my-2 py-2 bg-neutral-100'
          >
            {filteredPeople.map((person) => (
              <Combobox.Option key={person} value={person}>
                {({ active }) => (
                  <div className={`${active && 'bg-base-300'} flex items-center`}>
                    <div className='w-12 text-center justify-end items-center text-3xl font-bold'>
                      1
                    </div>
                    <div className='flex flex-col p-1'>
                      <div className='text-lg md:text-xl'>{person}</div>
                      <div className='text-sm md:text-base md:text-md text-neutral-400'>설명</div>
                    </div>
                  </div>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
      </section>
    </>
  )
}

Combo.getLayout = (page) => <Layout>{page}</Layout>
