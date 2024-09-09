import { useState } from 'react'
import CheckIcon from '@heroicons/react/24/outline/CheckIcon'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

const freePointers = ['사회적 의미 있는', '책 관련 행사예요', '광고를 교환해요', '기타']

const advancePointers = [
  '100자 이내 짧은 기사',
  '매주 수요일에 정기 정기 소식지 내 발행',
  '검토에 따라 인스타그램 노출 지원(선택)',
  '메인 광고판 노출 지원(공통)',
  '기타',
]

const professionalPointers = [
  '500자 이상의 긴 기사',
  '화/목 또는 희망일에 개별 소식지 발행',
  '캠페인 초안 검토 및 결과 보고',
  '인스타그램에 노출 제공',
  '이메일 또는 전화 상담 제공(선택)',
  '메인 광고판 노출 지원(공통)',
  '기타',
]

function PricingPlans() {
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [toggleActive, setToogleActive] = useState(true)

  return (
    <>
      <div className='form-control text-center mt-12 mb-12'>
        <label className='cursor-pointer text-xl'>
          <span className='align-top  mr-1'>1회</span>
          <input
            type='checkbox'
            className='toggle toggle-primary'
            onClick={() => setToogleActive(!toggleActive)}
            defaultChecked={toggleActive}
          />
          <span className='align-top ml-2'>연 6회</span>
        </label>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
        <div className='card w-full mt-6  bg-base-100 shadow-xl hover:shadow-2xl border'>
          <div className='card-body pt-12 pb-16  items-center text-center '>
            <h3 className='card-title text-xl'>무료</h3>
            <h1 className='font-bold mt-4 text-4xl'>₩ 0</h1>
            <span>( - )</span>
            <Link
              href=''
              className='btn text-base !hover:text-white hover:bg-primary mt-8 w-full  btn-outline normal-case btn-disabled'
            >
              기타 협업
            </Link>

            <ul className='text-left mt-4 text-lg'>
              {freePointers.map((p, k) => {
                return (
                  <li key={k} className='mt-2'>
                    <CheckIcon className='w-4 h-4 text-primary inline-block' /> {p}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className='card mt-6  bg-base-100 shadow-xl hover:shadow-2xl border'>
          <div className='card-body pt-12 pb-16 items-center  '>
            <div className='badge text-base badge-primary absolute text-white mt-1 ml-1 left-2 top-2'>
              가장 인기있는
            </div>
            <h3 className='card-title text-xl text-center'>기본</h3>
            <h1 className='font-bold mt-4 text-3xl text-center inline-block'>
              {toggleActive ? `₩ 83,333` : `₩ 100,000`}{' '}
              {toggleActive && (
                <span className='text-xl line-through text-primary align-middle mr-2'>
                  ₩ 100,000
                </span>
              )}
              <span className='text-lg align-middle font-light text-base-400'>/회</span>
            </h1>
            <span>(부가세 별도)</span>
            <Link
              href='https://market.bookshopmap.com/market/ads'
              className='btn text-base btn-outline !hover:text-white mt-8 w-full normal-case'
            >
              수수료 결제하기
            </Link>
            <ul className='text-left mt-4'>
              {advancePointers.map((p, k) => {
                return (
                  <li key={k} className='mt-2 text-lg'>
                    <CheckIcon className='w-4 h-4 text-primary inline-block' /> {p}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className='card w-full mt-6  bg-base-100 shadow-xl hover:shadow-2xl border'>
          <div className='card-body pt-12 pb-16 items-center  '>
            <h3 className='card-title text-xl text-center'>단독</h3>
            <h1 className='font-bold mt-4 text-3xl text-center inline-block'>
              {toggleActive ? `₩ 416,666` : `₩ 500,000`}{' '}
              {toggleActive && (
                <span className='text-xl line-through text-primary align-middle mr-2'>
                  ₩ 500,000
                </span>
              )}
              <span className='text-lg align-middle font-light text-base-400'>/회</span>
            </h1>
            <span>(부가세 별도)</span>
            <Link
              href='https://market.bookshopmap.com/market/ads-exclusive'
              className='btn text-base btn-outline !hover:text-white mt-8 w-full normal-case'
            >
              수수료 결제하기
            </Link>
            <ul className='text-left mt-4'>
              {professionalPointers.map((p, k) => {
                return (
                  <li key={k} className='mt-2 text-lg'>
                    <CheckIcon className='w-4 h-4 text-primary inline-block' /> {p}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingPlans
