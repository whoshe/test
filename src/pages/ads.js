import Layout from '@/component/layoutLanding'
import Plans from '@/component/landing/pricingPlans'
import {
  DocumentMagnifyingGlassIcon,
  DocumentCheckIcon,
  EnvelopeOpenIcon,
  BellAlertIcon,
  ChartPieIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import Poster from '/public/img/service/purpose-of-bookshopmap.svg'
import { NextSeo } from 'next-seo'

const keywordsData = [
  {
    keyword: '무료나눔',
  },
  {
    keyword: '지도',
  },
  {
    keyword: '도록',
  },
  {
    keyword: '철학',
  },
  {
    keyword: '심리',
  },
  {
    keyword: '정치',
  },
  {
    keyword: '지리',
  },
  {
    keyword: '독서',
  },
  {
    keyword: '글쓰기',
  },
  {
    keyword: '종교',
  },
  {
    keyword: '여행',
  },
  {
    keyword: '패션',
  },
  {
    keyword: '요리',
  },
  {
    keyword: '반려동물',
  },
  {
    keyword: '반려식물',
  },
  {
    keyword: '사회',
  },
  {
    keyword: '경제',
  },
  {
    keyword: '역사',
  },

  {
    keyword: '지역',
  },
  {
    keyword: '비평',
  },
  {
    keyword: '인터뷰',
  },
  {
    keyword: '자연',
  },
  {
    keyword: '생태',
  },
  {
    keyword: '환경',
  },
  {
    keyword: '물리',
  },
  {
    keyword: '기술',
  },
  {
    keyword: '의학',
  },
  {
    keyword: '건축',
  },
  {
    keyword: '디자인',
  },
  {
    keyword: '코딩',
  },
  {
    keyword: '미술',
  },
  {
    keyword: '사진',
  },
  {
    keyword: '그림',
  },

  {
    keyword: '음악',
  },

  {
    keyword: '만화',
  },

  {
    keyword: '일러스트',
  },
  {
    keyword: '드로잉',
  },
  {
    keyword: '언어',
  },
  {
    keyword: '자기계발',
  },
  {
    keyword: '생활지침',
  },
  {
    keyword: '만들기',
  },
  {
    keyword: '말하기',
  },
  {
    keyword: '시',
  },
  {
    keyword: '소설',
  },

  {
    keyword: '에세이',
  },
  {
    keyword: '희곡',
  },
  {
    keyword: '유스컬처',
  },
  {
    keyword: '서브컬처',
  },
  {
    keyword: '배리어프리',
  },
  {
    keyword: '퀴어',
  },
  {
    keyword: '단행본',
  },
  {
    keyword: '전집',
  },
  {
    keyword: '잡지',
  },
  {
    keyword: '독립출판',
  },
  {
    keyword: '동네서점에디션',
  },
  {
    keyword: '해외출판물',
  },
  {
    keyword: '외국어',
  },
  {
    keyword: '성인',
  },
  {
    keyword: '어린이청소년',
  },
  {
    keyword: '헌책',
  },
  {
    keyword: '고서',
  },
  {
    keyword: '성평등',
  },
  {
    keyword: '비건',
  },
  {
    keyword: '문구',
  },
  {
    keyword: '굿즈',
  },
  {
    keyword: '포스터',
  },
  {
    keyword: '백과사전',
  },
  {
    keyword: '메뉴얼',
  },
  {
    keyword: '보고서',
  },
  {
    keyword: '학습서',
  },
  {
    keyword: '안내서',
  },
  {
    keyword: '생활용품',
  },
  {
    keyword: '패션잡화',
  },
  {
    keyword: '커피',
  },
  {
    keyword: '차',
  },
  {
    keyword: '음료',
  },
  {
    keyword: '술',
  },
  {
    keyword: '디저트',
  },
  {
    keyword: '티켓',
  },
  {
    keyword: '소식지',
  },
  {
    keyword: '할인쿠폰',
  },
  {
    keyword: '상품권',
  },
  {
    keyword: '책시장',
  },
  {
    keyword: '공모전',
  },
  {
    keyword: '여성',
  },
  {
    keyword: '기타',
  },
]

const stepsData = [
  {
    icon: <DocumentMagnifyingGlassIcon className='w-10 h-10 inline-block' />,
    title: '신청',
    description: '신청서 제출 및 선결제 조건',
  },
  {
    icon: <EnvelopeOpenIcon className='w-10 h-10 inline-block' />,
    title: '집행',
    description: '이메일 소식지 또는 인스타그램 캠페인',
  },
  {
    icon: <ChartPieIcon className='w-10 h-10 inline-block' />,
    title: '보고',
    description: '한 주간의 통계 집계 (단독 only)',
  },
]

const featuresData = [
  {
    subject: '독자와 더 가까워지도록',
    description:
      '전국 7백여 책방지기를 포함 3.4천여 소식지 구독자 및 2~30대 가치 소비와 공유에 적극적인 1.8만여 인스타그램 팔로워 총 2.2만여 명의 이웃을 발견하세요.',
    image: '/img/photos/gaeddong.jpg',
    alt: '@개똥이네책놀이터',
    button: '',
    link: 'https://www.bookshopmap.com',
  },
  {
    subject: '문화예술 창작자와 함께합니다',
    description:
      '창작자가 합리적인 가격에 더 많은 독자를 만나도록, 광고 수수료를 1/5로 낮췄어요. 하나의 광고판을 여럿이 공유하고, 불필요한 절차를 간소화한 결과입니다.',
    image: '/img/photos/yourtastefilm.jpg',
    alt: '@관객의취향',
    button: '',
    link: 'https://www.bookshopmap.com',
  },
]

const testimonialsData = [
  {
    text: '스탬프투어 지도를 29곳의 독립서점 등 48곳의 문화예술 공간에서 무료 배포했습니다. 캠페인 결과 1만여 명의 서울 시민이 스탬프 투어에 온·오프 참여했어요.',
    name: '2020 책도시산책, 서울국제도서전',
    profilePic: '/img/blank-user.png',
  },
  {
    text: '한정판 기념일 책갈피를 전국 2백여 독립서점을 찾는 독자 대상으로 무료 배포했습니다. 캠페인 결과 문화예술 공동체에 이바지하는 브랜드 이미지에 도움이 됐어요.',
    name: '2019 세계책의날, JTBC브랜드',
    profilePic: '/img/blank-user.png',
  },
  {
    text: '소설원작 영화 시사회를 그림책 서점 50곳의 독자 대상으로 열고, 포스터와 견본도서를 무료 배포했습니다. 캠페인 결과 188명 독자 참여 및 책 판매 3배 증가했어요.',
    name: '2017 몬스터콜, 서울국제도서전',
    profilePic: '/img/blank-user.png',
  },
]

const faqData = [
  {
    question: 'Q. 신청서 제출하면 회신하나요? (선결제)',
    answer:
      ' A. 신간알림은 신청서 제출 및 선결제를 완료해야 검토를 시작합니다. 캠페인의 모든 과정은 결제일을 시작 기준일로 해서, 총 14일(2주) 내외가 소요될 예정입니다.',
  },
  {
    question: 'Q. 캠페인 전후에 연락하나요? (기본 vs 단독)',
    answer:
      ' A. 오직 단독 광고만 발행 전 초안 감수 및 발행 후 결과 보고서를 제공해요. 기본 광고는 캠페인 전후에 초안 내용을 미리 보거나 검토 및 조정 변경, 감수, 확정의 편집 과정부터 결과 보고까지 별도의 개별 연락을 하지 않습니다. 이메일 소식지 내 광고 집행 내용을 확인하려면, 매주 수요일에 정기 발행하는 동네서점 소식지를 미리 구독해주세요.',
  },
  {
    question: 'Q. 캠페인 후 매출 얼마나 늘까요? (효과)',
    answer:
      'A. 신간알림은 즉각적인 매출 증가 효과를 보장하지 않아요. 즉각적인 소비자 반응을 기대한다면 실망할 수 있습니다. 문화예술 상품의 소비자 반응은 상품의 성격과 내용, 창작자의 인지도 등에 따라 편차가 매우 큰 편입니다. 하지만 독립서점 책방지기 등 운영자와의 원활한 소통과 관계를 유지해나간다면, 장기적으로 좋은 반응을 얻게 될 겁니다.',
  },
  {
    question: 'Q. 캠페인 무료 지원이 가능할까요? (협업)',
    answer:
      'A. 협업광고(무료) 신청서를 작성 제출해주시면, 내용 검토에 따라 무료 광고를 지원할 수 있어요. 다만, 운영 기준에 미적합 시 별도의 통보 없이 집행 거절될 수 있어요.',
  },
  {
    question: 'Q. 캠페인 거절 및 환불, 편집은? (주의사항)',
    answer:
      'A. 신청서 검토에 따라 운영 기준에 미적합 시 집행 거절되거나, 신청 내용의 일부를 편집 발행할 수 있어요. 광고 거절 시, 환불은 7일 이내에 조치합니다. 광고를 집행한 후에는 환불이 불가합니다.',
  },
  {
    question: 'Q. 세금계산서 발행 방법은? (계좌이체)',
    answer:
      ' A. 마켓에서 신용카드로 결제하면, 세금계산서가 필요 없어요. 또는 페이팔이나 직접 은행계좌로 이체 등 원하는 결제 방법을 선택할 수 있어요. 세금계산서는 보통 익월 10일(평일 기준)에 발행해드려요. ➊ 계좌이체 방식 결제 시: 입금자의 이름과 이메일 정보를 작성하고 결제해주세요. ➋ 입금계좌에 수수료 입금: KB국민은행 975901-00-040972 주식회사 동네서점 ➌ 세금계산서 발행 신청: 사업자등록증 사본과 이메일주소, 상품명을 이메일 support@bookshopmap.com로 보내주세요.',
  },
  {
    question: 'Q. 얼마나 많은 사람이 반응할까? (통계집계)',
    answer:
      'A. 평균 캠페인 개봉/노출률은 전체 구독자 수의 30% 내외이며, 공간 운영자는 평균 50% 내외입니다. 최종 목표 전환/반응은 전체 구독자 수의 평균 1% 내외의 결과를 보여줍니다. 총 2.2만여 구독자 수 기준으로 최종 노출 수 6천여 명이며, 목표 전환은 2.2백여 명 수준입니다. 최근의 소식지 구독 통계를 지난 광고에서 더 알아보세요.',
  },
  {
    question: 'Q. 캠페인 효과 더 높이는 방법은? (멤버십)',
    answer:
      'A. 1:다의 간접 소통 방식뿐만 아니라 전화 및 문자 메시지, 직접 방문 등 1:1 직접 소통 방식도 함께 병행해야 해요. 이 과정에서 기본 자세나 예절을 지키세요. 동네서점 멤버십 후원 회원이라면, 지도 상세페이지에서 독립서점 책방지기에게 지접 연락할 수 있는 이메일주소와 휴대전화번호 등 유료정보를 열람할 수 있으니 고려해보세요.',
  },
  {
    question: 'Q. 수수료 수익은 어떻게 쓰이나요? (수익금)',
    answer:
      'A. 신간알림의 수익금은 동네서점 지도 서비스 개발과 운영을 위해 쓰입니다. 많은 관심과 응원 바라요!',
  },
]

export default function Landing() {
  return (
    <>
      <NextSeo
        title='신간알림이 도착했어요'
        openGraph={{
          url: '/landing',
          images: [{ url: '' }],
        }}
      />
      <section
        id='purpose'
        className='container mx-auto justify-center items-center my-16 md:my-32 p-4'
      >
        {/* Purpose Section */}
        <div className='grid grid-flow-row text-center gap-2'>
          {/* <h1 className='text-3xl font-bold'>목적</h1>
          <h3 className='text-xl'>Purpose</h3>
          <p className='text-center mt-24 text-xl'></p> */}
          <figure>
            <Poster
              width={1200}
              height={630}
              className='w-full h-auto'
              alt='동네서점 서비스의 목적'
            />
            <figcaption className='text-xl mb-4'>
              창작자와 독립서점 책방지기, 독자의 연결을 지원합니다.
            </figcaption>
          </figure>
        </div>
      </section>
      <section id='steps' className='mx-auto max-w-7xl py-20 mt-20'>
        {/* Steps Section */}
        <h2 className='text-3xl text-center font-bold'>일정</h2>
        <h3 className='text-xl text-center'>Steps</h3>

        <ul className='grid mt-24 md:grid-cols-3 grid-cols-1 gap-8'>
          {stepsData.map((i, k) => {
            return (
              <li key={k} className='card w-full bg-base-100 border hover:bg-base-200 shadow-xl'>
                <div className='grid -mt-4 place-items-center'>
                  <div className='w-12 h-12  rounded-full bg-base-200 flex justify-center items-center border'>
                    <p className='text-4xl'>{k + 1}</p>
                  </div>
                </div>
                <div className='card-body items-center text-center'>
                  <p className='text-primary'>{i.icon}</p>
                  <h2 className='text-2xl text-center'>{i.title}</h2>
                  <p className='mt-2'> {i.description}</p>
                </div>
              </li>
            )
          })}
        </ul>

        <div className='flex flex-col md:flex-row justify-center gap-4 mt-12 mb-12'>
          <p className='text-center'>
            <Link
              href='https://www.bookshopmap.com'
              className='hover:text-primary tooltip tooltip-top col-span-2'
              data-tip='동네서점 홈으로'
            >
              <label className='badge badge-outline'>공통</label> 동네서점 홈 메인 광고판에 노출
              지원
            </Link>
          </p>
          <p className='text-center'>
            <label className='badge badge-outline'>기간</label> 결제일로부터 총 14일(2주) 내외 소요
          </p>
        </div>
      </section>
      <section id='features' className='container mx-auto py-20'>
        {/* Featured Section... */}
        <h2 className='text-3xl mt-12 text-center font-bold'>특징</h2>
        <h3 className='text-xl text-center'>Features</h3>
        {/* Target */}
        <h2 className='text-2xl mt-12 mb-12 text-center leading-10 font-bold'>
          새 책과 문구에서, 책시장까지
        </h2>
        <ul className='flex flex-wrap justify-center gap-1'>
          {keywordsData.map((i, k) => {
            return (
              <li key={k} className='badge badge-lg badge-outline hover:bg-base-200'>
                {i.keyword}
              </li>
            )
          })}
        </ul>
        <ul className='grid grid-flow-row place-items-center mt-24 gap-8'>
          {featuresData.map((s, k) => {
            return (
              <li
                key={k}
                className='grid grid-col-reverse md:grid-cols-2 grid-cols-1 w-full gap-8 place-items-center'
              >
                {k % 2 ? (
                  <>
                    <figure className='relative'>
                      <Image
                        width={480}
                        height={480}
                        loading='lazy'
                        src={s.image}
                        className='h-auto mx-auto rounded-full grayscale hover:grayscale-0 w-96'
                        alt={s.alt}
                      />
                      <figcaption className='absolute text-neutral-300 text-center text-xs bottom-6 w-full'>
                        {s.alt}
                      </figcaption>
                    </figure>
                    <div className='text-center'>
                      <h2 className='text-2xl  text-center leading-10 font-bold'>{s.subject}</h2>
                      <p className='text-lg'>{s.description}</p>
                      {s.button == '' ? (
                        ''
                      ) : (
                        <Link href={s.link} className='btn btn-primary mt-8 px-8 normal-case'>
                          {s.button}
                        </Link>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className='text-center'>
                      <h2 className='text-2xl  text-center leading-10 font-bold'>{s.subject}</h2>
                      <p className='text-lg'>{s.description}</p>
                      {s.button == '' ? (
                        ''
                      ) : (
                        <Link href={s.link} className='btn btn-primary mt-8 px-8 normal-case'>
                          {s.button}
                        </Link>
                      )}
                    </div>
                    <figure className='relative order-1'>
                      <Image
                        width={480}
                        height={480}
                        loading='lazy'
                        src={s.image}
                        className='h-auto mx-auto rounded-full grayscale hover:grayscale-0 w-96'
                        alt={s.alt}
                      />
                      <figcaption className='absolute text-neutral-300 text-center text-xs bottom-6 w-full'>
                        {s.alt}
                      </figcaption>
                    </figure>
                  </>
                )}
              </li>
            )
          })}
        </ul>
      </section>
      <section id='testimonials' className='mx-auto max-w-7xl py-20'>
        {/* Testimonials Section... */}
        <h1 className='text-3xl  text-center font-bold'>후기</h1>
        <h3 className='text-xl text-center'>Testimonials</h3>
        <ul className='grid mt-24 md:grid-cols-3 grid-cols-1 gap-8'>
          {testimonialsData.map((t, k) => {
            return (
              <li key={k} className='card w-full bg-base-100 hover:bg-base-200 shadow-xl border'>
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
                  <p className='text-neutral-400 text-lg'> {t.name}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
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
        <h3 className='text-xl text-center'>매주 금요일 신청 및 결제를 마감합니다.</h3>
        <Link
          href='https://docs.google.com/forms/d/e/1FAIpQLSfpIZjMN9mnMOsu_VBg7-Vn2NaSXuSpG2e1ERByt5tvIlGG6A/viewform'
          className='btn mt-12 btn-primary btn-block normal-case text-lg text-base-100'
        >
          지금 신청하기
        </Link>
      </section>
    </>
  )
}

Landing.getLayout = (page) => <Layout>{page}</Layout>
