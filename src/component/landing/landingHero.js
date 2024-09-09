import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='hero'>
      {/* 표지 */}
      <div className='hero-content flex-col md:flex-row-reverse'>
        <figure className='relative'>
          <Image
            priority
            width={480}
            height={640}
            src='/img/photos/hero-perfect-days.jpg'
            className='mx-auto rounded-full grayscale hover:grayscale-0'
            alt='© 완벽한 날들 from 2017 그림만화전'
          />
          <figcaption className='absolute text-neutral-300 text-center text-xs bottom-6 w-full'>
            @완벽한날들
          </figcaption>
        </figure>
        <div>
          <h1 className='text-3xl font-bold'>신간알림이 도착했어요.</h1>
          <p className='py-6 text-lg'>
            동네서점 신간알림이란 독립서점 책방지기와 창작자, 독자의 받은 편지함으로 찾아가는
            문화예술 이메일 광고 서비스입니다. 창작자라면 새 책과 문구에서, 책시장까지 지금
            알리세요.
          </p>
          <p>
            <Link
              className='btn btn-primary text-white text-lg'
              href='https://docs.google.com/forms/d/e/1FAIpQLSfpIZjMN9mnMOsu_VBg7-Vn2NaSXuSpG2e1ERByt5tvIlGG6A/viewform'
            >
              신청하기
            </Link>
            <Link
              href='https://www.bookshopmap.com/news/main_ads'
              className='btn btn-ghost text-lg'
            >
              지난 광고
            </Link>
          </p>
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
    </section>
  )
}
