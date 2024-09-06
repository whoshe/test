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
    profilePic: '/img/blank-user.png',
  },
  {
    text: "Web Design AI completely transformed my small business with their innovative approach. The AI-powered design solutions they offered not only look amazing but are also highly effective in attracting customers. I'm thrilled with the results!",
    name: 'Michael, USA',
    profilePic: '/img/blank-user.png',
  },
  {
    text: 'Web Design AI has taken my e-commerce website to the next level. Their AI-driven design techniques have improved user experience and conversion rates. The team at Web Design AI is a game-changer in the web design industry',
    name: 'David, Canada',
    profilePic: '/img/blank-user.png',
  },
]

const faqData = [
  {
    question: 'Q. 신간알림의 차별화 특징은? (기획의도)',
    answer:
      'A. 신간알림은 더 많은 창작자가 합리적인 가격으로 최대의 광고 효과를 누릴 수 있도록 고안했습니다. 기존의 광고 캠페인은 건당 50만 원의 단독 발행으로 비용의 부담이 컸습니다. 캠페인 전후에 해당 고객과 편집자가 광고 초안 내용을 검토하고, 조정하거나 수정, 최종 감수의 편집 절차와 결과 보고까지 많은 인력과 소통 비용이 발생할 수밖에 없었습니다. 그렇다면, 불필요할 수도 있는 검수 및 보고 절차를 간소화하고, 하나의 광고판을 여럿이 공유한다면 어떨까. 신간알림은 이 아이디어로부터 출발했습니다.',
  },
  {
    question: 'Q. 얼마나 많은 사람이 반응할까? (통계)',
    answer:
      'A. 동네서점 소식지/인스타그램 채널의 평균 캠페인 개봉/노출률은 전체 구독자 수의 30% 내외이며, 공간 운영자는 평균 50% 내외입니다. 최종 목표 전환/반응은 전체 구독자 수의 평균 1% 내외의 결과를 보여줍니다. 총구독자 수 합계 2.2만여 명 기준으로 노출 수 6천여 명이며, 최종 목표 전환은 2.2백여 명 수준입니다. 최근의 소식지 구독 통계를 지난 캠페인에서 더 알아보세요.',
  },
  {
    question: 'Q. 신간알림이 매출 효과 있을까? (효과)',
    answer:
      'A. 신간알림은 광고 효과를 보장하지 않습니다. 문화예술 상품의 소비자 반응은 상품의 성격과 내용, 창작자의 인지도 등에 따라 편차가 큰 편입니다. 1:다 소통 방식의 이메일 발행은 가장 기본적이며 효율적인 채널입니다. 하지만 즉각적인 소비자 반응을 기대한다면 실망할 수 있습니다. 장기적인 관점으로 독립서점 등 문화예술 공간 운영자와의 원활한 소통 및 관계를 유지해나간다면 반드시 좋은 효과를 얻게 될 겁니다.',
  },
  {
    question: 'Q. 캠페인 집행 전후 연락하나요? (운영)',
    answer:
      ' A. 신간알림은 창작자 대상으로 캠페인 전후에 내용을 미리 보거나 검토 및 조정 변경, 감수, 확정의 편집 과정부터 결과 보고까지 별도의 개별 연락하지 않습니다. 인스타그램 게시물 노출 시, 신청서에 작성한 광고주의 계정 ID를 태그 공유합니다. 다만 캠페인 집행 후 오류 내용은 소식지의 회신으로 수정 제안해주시면, 이메일 소식지를 제외한 변경 가능한 채널 대상으로 한해 24시간 이내에 검토 후 반영할 수 있습니다. 이메일 발행 내용을 확인하려면, 동네서점 소식지를 꼭 미리 구독해주세요.',
  },
  {
    question: 'Q. 캠페인 효과 높이는 방법은? (멤버십)',
    answer:
      'A. 이메일과 소셜미디어에 상품을 노출하는 1:다 간접 소통 방식과 전화와 문자 메시지, 직접 방문 등 다양한 채널을 통한 1:1 직접 소통 방식도 함께 병행해야 합니다. 이 과정에서 자세나 예절을 지키는 것은 기본이라는 걸 잊지 마세요. 동네서점 멤버십 회원이라면, 지도 상세페이지에서 독립서점 책방지기의 이메일주소와 휴대전화번호 등 유료정보를 열람할 수 있어요. 또는 단독 광고 캠페인도 고려해보세요.',
  },
  {
    question: 'Q. 세금계산서 발행 방법은? (계좌이체 결제)',
    answer:
      ' A. 동네서점 마켓에서 신용카드/페이팔/계좌이체/가상계좌 등 원하는 결제 방법을 선택해 결제할 수 있어요. ➊ 온라인 결제: 직접 은행계좌 이체 등 계좌이체 방식 결제 시 입금자의 이름과 이메일 정보를 정확히 작성하고 결제해주세요. ➋ 직접 은행계좌 이체 입금 시: 입금계좌: KB국민은행 975901-00-040972 주식회사 동네서점 ➌ 세금계산서 발행 신청: 입금계좌로 수수료를 입금한 후, 아래의 필요 서류 및 항목을 작성 회신해주세요. 세금계산서는 보통 익월 10일(평일 기준)에 입금일 기준 해당 달의 마지막 날짜로 받은편지함으로 보내드려요. 별도로 원하는 발행 일자와 상품명이 있으면 작성해주세요. 없다면, 비워두세요. (보내실 곳) support@bookshopmap.com',
  },
]

export default function Landing() {
  return (
    <>
      <section id='steps' className='mx-auto max-w-7xl py-20 mt-20'>
        {/* Steps Section */}
        <h2 className='text-3xl text-center font-bold'>일정</h2>
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
                <div className='card-body items-center text-center'>
                  <p className='text-primary'>{i.icon}</p>
                  <p className='mt-2'> {i.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section id='features' className='container mx-auto max-w-7xl py-20'>
        {/* Featured Section... */}
        <h2 className='text-3xl mt-12 text-center font-bold'>특징</h2>
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
      <section id='testimonials' className='mx-auto max-w-7xl py-20'>
        {/* Testimonials Section... */}
        <h1 className='text-3xl  text-center font-bold'>후기</h1>
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
      </section>{' '}
      <section id='faq' className='container mx-auto max-w-7xl py-20'>
        {/* Frequently asked question */}
        <h2 className='text-3xl mt-12 text-center font-bold'>질문</h2>
        <h3 className='text-xl text-center'>FAQ</h3>

        <p className='text-center mt-12 mb-12 text-xl'>
          더 궁금한 점은{' '}
          <Link
            href='https://www.bookshopmap.com/report/inquiry'
            className='link hover:text-primary'
          >
            제보하기로 문의
          </Link>
          해주세요.
        </p>

        <accordion>
          <ul className='bg-base-200 rounded-3xl mt-24'>
            {faqData.map((f, k) => {
              return (
                <>
                  <li key={k} className='collapse collapse-arrow'>
                    <input
                      type='radio'
                      name='my-accordion'
                      defaultChecked={k == 0 ? 'checked' : ''}
                    />
                    <div className='collapse-title text-lg font-bold'>{f.question}</div>
                    <div className='collapse-content'>
                      <p className='p-4 mb-4 text-lg'>{f.answer}</p>
                    </div>
                  </li>
                </>
              )
            })}
          </ul>
        </accordion>
      </section>
      <section id='plans' className='mx-auto max-w-7xl py-20'>
        {/* Plan Section... */}
        <h2 className='text-3xl  text-center font-bold'>가격</h2>
        <h3 className='text-xl text-center'>Plans</h3>
        <Plans />
      </section>
      <section className='mx-auto max-w-2xl py-40 px-4'>
        <h2 className='text-3xl text-center font-bold'>곧 마감!</h2>
        <p className='text-lg text-center'>Closing soon!</p>
        <Link href='/start-designing'>
          <button className='btn mt-12 btn-primary btn-block inline-block px-12 normal-case text-lg text-white'>
            지금 신청하기
          </button>
        </Link>
      </section>
    </>
  )
}

Landing.getLayout = (page) => <Layout>{page}</Layout>
