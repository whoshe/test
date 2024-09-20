import Link from 'next/link'
import ErrorIcon from '/public/img/error-warning.svg'

export default function Custom500() {
  return (
    <main className='flex flex-col-1 h-screen justify-center items-center'>
      <section className='grid grid-col-1 rounded-md justify-center'>
        {/* 에러 내용 표시 */}
        <div className='w-full md:w-96 text-center'>
          <h1 className='text-3xl font-semibold flex gap-2 items-center justify-center'>
            <ErrorIcon alt='An error occurred' width={12} height={12} className='w-12 h-12' /> 500
          </h1>
          <p>잠깐만요, 서버에 문제가 생긴 것 같아요.</p>
          <p>Server-side error occurred</p>
          {/* 홈으로 가기 버튼 */}
          <Link href='/' className='btn btn-lg btn-block text-lg mt-8'>
            광장으로 돌아가기
          </Link>
        </div>
      </section>
      {/* <p>500 - Server-side error occurred</p> */}
    </main>
  )
}
