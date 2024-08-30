import Layout from '@/component/layoutLanding'
import Plans from '@/component/landing/pricingPlans'
import {
  ArrowUpOnSquareIcon,
  DocumentTextIcon,
  ArrowDownOnSquareIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

const stepsData = [
  {
    icon: <ArrowUpOnSquareIcon className='w-10 h-10 inline-block mr-2' />,
    description: 'Step 1 Desciption',
  },
  {
    icon: <DocumentTextIcon className='w-10 h-10 inline-block mr-2' />,
    description: 'Step 2 Desciption',
  },
  {
    icon: <ArrowDownOnSquareIcon className='w-10 h-10 inline-block mr-2' />,
    description: 'Step 3 Desciption',
  },
]

const featuresData = [
  {
    subject: '주제 1',
    description: '설명 1',
    image: '/img/blank-cover.png',
    button: '더 알아보기',
    link: 'https://www.bookshopmap.com',
  },
  {
    subject: '주제 2',
    description: '설명 2',
    image: '/img/blank-cover.png',
    button: '더 알아보기',
    link: 'https://www.bookshopmap.com',
  },
  {
    subject: '주제 3',
    description: '설명 3',
    image: '/img/blank-cover.png',
    button: '더 알아보기',
    link: 'https://www.bookshopmap.com',
  },
]

const testimonialsData = [
  {
    text: "I wanted a website that truly represented my creative work and personality. Web Design AI perfectly captured my vision and designed a website that is not only beautiful but also unique. They were a pleasure to work with, and I'm proud to showcase my portfolio on the site they created for me.",
    name: 'Emily, USA',
    profilePic: '/img/member1.png',
  },
  {
    text: "Web Design AI completely transformed my small business with their innovative approach. The AI-powered design solutions they offered not only look amazing but are also highly effective in attracting customers. I'm thrilled with the results!",
    name: 'Michael, USA',
    profilePic: '/img/member2.png',
  },
  {
    text: 'Web Design AI has taken my e-commerce website to the next level. Their AI-driven design techniques have improved user experience and conversion rates. The team at Web Design AI is a game-changer in the web design industry',
    name: 'David, Canada',
    profilePic: '/img/member3.png',
  },
]

export default function Landing() {
  return (
    <>
      <section className='mx-auto max-w-7xl py-20 mt-20'>
        {/* Summary Section */}
        <h2 className='text-3xl text-center font-bold'>참여 방법</h2>
        <h3 className='text-xl text-center'>Steps</h3>
        <div className='grid mt-24 md:grid-cols-3 grid-cols-1 gap-8'>
          {stepsData.map((i, k) => {
            return (
              <div key={k} className='card w-full bg-base-100 border hover:bg-base-200 shadow-xl'>
                <div className='grid -mt-4 place-items-center'>
                  <div className='w-16 h-16  rounded-full  bg-neutral-500 text-base-100 flex font-bold justify-center items-center'>
                    <p className='text-4xl'>{k + 1}</p>
                  </div>
                </div>
                <div className='card-body  items-center text-center'>
                  <p className='text-primary'>{i.icon}</p>
                  <p className='mt-2'> {i.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className='mx-auto max-w-7xl py-20'>
        {/* Featured Section... */}
        <h2 className='text-3xl mt-12 text-center font-bold'>주요 특징</h2>
        <h3 className='text-xl text-center'>Features</h3>
        <div className='grid grid-flow-row place-items-center mt-24 gap-8'>
          {featuresData.map((s, k) => {
            return (
              <div
                key={k}
                className='grid  md:grid-cols-2 grid-cols-1 w-full gap-8 place-items-center'
                dir={k % 2 ? 'rtl' : ''}
              >
                <figure>
                  <Image
                    src={s.image}
                    width={200}
                    height={200}
                    className='w-80 h-80 object-cover rounded-3xl'
                    alt={s.link}
                  />
                </figure>
                <div className='text-center'>
                  <h2 className='text-2xl  text-center leading-10 font-bold'>{s.subject}</h2>
                  <p className='text-lg'>{s.description}</p>
                  <Link href={s.link}>
                    <button className='btn btn-primary mt-8 px-8 normal-case'>{s.button}</button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className='mx-auto max-w-7xl py-20'>
        {/* Testimonials Section... */}
        <h1 className='text-3xl  text-center font-bold'>추천의 말</h1>
        <h3 className='text-xl text-center'>Testimonials</h3>
        <div className='grid mt-24 md:grid-cols-3 grid-cols-1 gap-8'>
          {testimonialsData.map((t, k) => {
            return (
              <div key={k} className='card w-full bg-base-100 hover:bg-base-200 shadow-xl border'>
                <figure className='px-10 pt-10'>
                  <Image
                    src={t.profilePic}
                    width={250}
                    height={250}
                    className='mask w-20 h-20 mask-squircle'
                    alt={t.name}
                  />
                </figure>
                <div className='card-body items-center text-center'>
                  <p className='text-lg'>{t.text}</p>
                  <p className='text-neutral-400'>-{t.name}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className='mx-auto max-w-7xl py-20'>
        {/* Plan Section... */}
        <h2 className='text-3xl  text-center font-bold'>가격 정책</h2>
        <h3 className='text-xl text-center'>Plans</h3>
        <Plans />
      </section>
      <section className='mx-auto max-w-2xl py-40 px-4'>
        <h2 className='text-3xl text-center font-bold'>곧 마감!</h2>
        <p className='text-lg text-center'>Closing soon!</p>
        <Link href='/start-designing'>
          <button className='btn mt-12 btn-primary btn-block inline-block px-12 normal-case text-lg'>
            신청하기
          </button>
        </Link>
      </section>
    </>
  )
}

Landing.getLayout = (page) => <Layout>{page}</Layout>
