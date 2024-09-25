import Link from 'next/link'
import Layout from '@/component/layout'
import toast, { Toaster } from 'react-hot-toast'
import { NextSeo } from 'next-seo'
import KitchenNav from '@/component/kitchen/kitchenNav'
import React, { useEffect } from 'react'
// Nextjs 스캐너
import Scanner from './kitchen/nextjs-scanner'
// import dynamic from 'next/dynamic'

// 푸시 알림
const notify = () =>
  // 푸시 알림: 성공
  // toast.success('알림을 보냈어요!')
  // 푸시 알림: 실패
  toast.error('뭔가 문제가 있어요!')
// 푸시 알림: 아이콘+확인 버튼 추가
// toast.success(
//   (t) => (
//     <span className=''>
//       <strong>알림</strong>을 보냈어요!
//       <button className='btn btn-sm text-lg ml-2' onClick={() => toast.dismiss(t.id)}>
//         확인
//       </button>
//     </span>
//   ),
//   {
//     icon: '👏',
//   },
// )

// 환영 인사
function Welcome({ name }) {
  return <>어서오세요 {name} 님</>
}

// 홈 화면
export default function Root() {
  return (
    <>
      <NextSeo
        title=''
        openGraph={{
          url: '',
          images: [{ url: '' }],
        }}
      />
      {/** 머리글 */}

      <KitchenNav />
      <div className='container mx-auto grid grid-flow-row gap-4'>
        <section className='card w-full bg-base-100 shadow-md'>
          {/* 환영 인사 */}
          <div className='p-4 card-title'>
            <Welcome name='남반장' />,
          </div>
          <div className='card-body'>
            <h3 className='text-xl'>연습장에 오신 것을 환영합니다.</h3>
          </div>
        </section>
        <section className='card w-full bg-base-100 shadow-md border'>
          {/* 푸시 알림 */}
          <div className='p-4 card-title'>푸시 알림</div>
          <div className='card-body'>
            <div>
              <button className='btn text-lg btn-primary' onClick={notify}>
                알림 보냐
              </button>
              <Toaster
                position='top-right'
                reverseOrder={true}
                toastOptions={{
                  className: '',
                  style: {
                    border: '',
                    padding: '16px',
                    color: '',
                  },
                }}
              />
            </div>
          </div>
        </section>
        <section className='card w-full bg-base-100 shadow-md border'>
          {/* React 스캔 */}
          <div className='p-4 card-title'>Nextjs 스캐너 (반응형 모달)</div>
          <div className='card-body'>
            <p className='text-xl'>react-qr-reader for Nextjs</p>
            {/* 반응형 Modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <div className='flex gap-4'>
              <Link href='./kitchen/nextjs-scanner' className='btn btn-primary text-lg'>
                쪽 열기
              </Link>
              <button
                className='btn text-lg'
                onClick={() => document.getElementById('my_modal_2').showModal()}
              >
                바닥 서랍에서 스캔하기
              </button>
            </div>
            {/* Modal 내용 */}
            <dialog id='my_modal_2' className='modal modal-bottom'>
              <div className='modal-box'>
                <Scanner />
                <div className='modal-action'>
                  <form method='dialog'>
                    {/* if there is a button in form, it will close the modal */}
                    <button className='btn'>닫기</button>
                  </form>
                </div>
              </div>
              <form method='dialog' className='modal-backdrop'>
                <button>close</button>
              </form>
            </dialog>
          </div>
        </section>
        <section className='card w-full bg-base-100 shadow-md'>
          <div className='p-4 card-title'>가나다</div>
          <div className='card-body'>가나다</div>
        </section>

        {/* 서랍 */}
        <section className='card w-full bg-base-100 shadow-md'>
          <div className='p-4 card-title'>서랍</div>
          <div className='card-body'>
            <div className='drawer'>
              {/* 왼쪽 서랍 */}
              <input id='left-side-drawer' type='checkbox' className='drawer-toggle' />
              <div className='drawer-content'>
                <div className='flex justify-between'>
                  <div>
                    <label
                      htmlFor='left-side-drawer'
                      className='drawer-button btn btn-primary text-base-100'
                    >
                      왼쪽 서랍
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor='right-side-drawer'
                      className='drawer-button btn btn-primary text-base-100'
                    >
                      오른쪽 서랍
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
              {/* 오른쪽 서랍 */}
              <input id='right-side-drawer' type='checkbox' className='drawer-toggle' />
              <div className='drawer-side'>
                <label htmlFor='right-side-drawer' className='drawer-overlay'></label>
                <ul className='menu p-4 w-80 bg-base-100 text-base-content h-screen'>
                  <li>Sidebar Item 1</li>
                  <li>Sidebar Item 2</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

Root.getLayout = (page) => <Layout>{page}</Layout>
