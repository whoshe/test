import Link from 'next/link'
import ErrorIcon from '/public/img/error-warning.svg'

export default function Custom404() {
  return (
    <main className='flex flex-col-1 h-screen justify-center items-center'>
      <section className='grid grid-col-1 rounded-md justify-center'>
        {/* 에러 내용 표시 */}
        <div className='w-full md:w-96 text-center'>
          <h1 className='text-3xl font-semibold flex gap-2 items-center justify-center'>
            <ErrorIcon alt='An error occurred' width={12} height={12} className='w-12 h-12' /> 404
          </h1>
          <p>잠깐만요, 이 쪽을 찾을 수 없어요.</p>
          <p>Page Not Found</p>
          {/* 홈으로 가기 버튼 */}
          <Link href='/' className='btn btn-lg btn-block text-lg mt-8'>
            광장으로 돌아가기
          </Link>
        </div>
      </section>
      {/* <p>404 - Page Not Found</p> */}
    </main>
  )
}
