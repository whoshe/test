import { useState } from 'react'
import CheckIcon from '@heroicons/react/24/outline/CheckIcon'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

const freePointers = ['Feature 1', 'Feature 2']

const advancePointers = [
  'Feature 1',
  'Feature 2',
  'Advance Feature 1',
  'Advance Feature 2',
  'Advance Feature 3',
  'Advance Feature 4',
]

const professionalPointers = [
  'Feature 1',
  'Feature 2',
  'Advance Feature 1',
  'Advance Feature 2',
  'Advance Feature 3',
  'Professional Feature 1',
  'Professional Feature 2',
  'Professional Feature 3',
  'Professional Feature 4',
]

function PricingPlans() {
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const [toggleActive, setToogleActive] = useState(true)

  return (
    <>
      <div className='form-control text-center mt-12 mb-12'>
        <label className='cursor-pointer text-xl'>
          <span className='align-top  mr-1'>Monthly</span>
          <input
            type='checkbox'
            className='toggle  toggle-primary'
            onClick={() => setToogleActive(!toggleActive)}
            defaultChecked={toggleActive}
          />
          <span className='align-top ml-2'>Yearly</span>
        </label>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
        <div className='card w-full mt-6  bg-base-100 shadow-xl hover:shadow-2xl border'>
          <div className='card-body pt-12 pb-16  items-center text-center '>
            <h2 className='card-title text-xl'>Free</h2>
            <h2 className='font-bold mt-4 text-4xl'>$0</h2>
            <Link href='/start-designing' className='w-full'>
              <button className='btn !hover:text-white hover:bg-primary btn-sm mt-8 w-full  btn-outline normal-case '>
                Start Your Project
              </button>
            </Link>

            <ul className='text-left mt-4'>
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
            <div className='badge badge-primary badge-sm absolute text-white mt-1 ml-1 left-2 top-2'>
              Most Popular
            </div>
            <h2 className='card-title text-xl text-center'>Advance </h2>
            <h2 className='font-bold mt-4 text-4xl text-center inline-block'>
              {toggleActive ? `$5` : `$8`}{' '}
              {toggleActive && (
                <span className='text-xl line-through text-primary align-middle mr-2'>$8</span>
              )}
              <span className='text-xs align-middle font-light text-base-400'>/monthly</span>
            </h2>
            <button
              className='btn btn-sm mt-8 btn-primary normal-case w-full'
              onClick={() => openPaymentPage('SUBSCRIPTION')}
            >
              Subscribe
            </button>
            <ul className='text-left mt-4'>
              {advancePointers.map((p, k) => {
                return (
                  <li key={k} className='mt-2'>
                    <CheckIcon className='w-4 h-4 text-primary inline-block' /> {p}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className='card w-full mt-6  bg-base-100 shadow-xl hover:shadow-2xl border'>
          <div className='card-body pt-12 pb-16 items-center  '>
            <h2 className='card-title text-xl text-center'>Professional </h2>
            <h2 className='font-bold mt-4 text-4xl text-center inline-block'>
              {toggleActive ? `$12` : `$15`}{' '}
              {toggleActive && (
                <span className='text-xl line-through text-primary align-middle mr-2'>$15</span>
              )}
              <span className='text-xs align-middle font-light text-base-400'>/monthly</span>
            </h2>
            <button
              className='btn btn-sm mt-8 btn-outline normal-case w-full'
              onClick={() => openPaymentPage('SUBSCRIPTION')}
            >
              Subscribe
            </button>
            <ul className='text-left mt-4'>
              {professionalPointers.map((p, k) => {
                return (
                  <li key={k} className='mt-2'>
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
