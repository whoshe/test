import Link from 'next/link'
import Layout from '@/component/layout'
import KitchenHeader from '@/component/kitchen/kitchenHeader'
import toast, { Toaster } from 'react-hot-toast'
import { NextSeo } from 'next-seo'
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
        title='부엌'
        openGraph={{
          url: '',
          images: [{ url: '' }],
        }}
      />
      {/** 머리글 */}
      <KitchenHeader />
      <div className='container mx-auto grid grid-flow-row gap-4'>
        <section className='card w-full bg-base-100 shadow-md'>
          {/* 환영 인사 */}
          <div className='p-4 card-body'>
            <h1 className='text-3xl'>
              <Welcome name='남반장' />,
            </h1>
            <h3 className='text-xl'>연습장에 오신 것을 환영합니다.</h3>
          </div>
        </section>
        <section className='card w-full bg-base-100 shadow-md border'>
          {/* 푸시 알림 */}
          <div className='p-4 card-body'>
            <h1 className='text-3xl'>푸시 알림</h1>
            <h3 className='text-xl'>알림 연습장</h3>
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
      </div>
    </>
  )
}

Root.getLayout = (page) => <Layout>{page}</Layout>
