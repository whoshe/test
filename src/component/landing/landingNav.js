import BI from '/public/img/logo-singan.svg'
import Link from 'next/link'
import Image from 'next/image'
import Youtube from '/public/img/icons/youtube.svg'
import Twitter from '/public/img/icons/twitter.svg'
import Instagram from '/public/img/icons/instagram.svg'
import Newsletter from '/public/img/icons/mail.svg'

export default function Nav() {
  return (
    <nav className='navbar mx-auto max-w-7xl'>
      {/* 탐색 */}
      <Link href='/' className='btn btn-ghost normal-case text-3xl'>
        <figure>
          <BI
            alt='Bookshopmap Symbol Singan'
            width={16}
            height={16}
            className='w-10 h-10 fill-current'
          />
        </figure>
        신간알림
      </Link>
      <div className='grow'>
        <ul className='dropdown menu text-lg menu-horizontal hidden md:flex'>
          <li key='0'>
            <Link href='https://www.bookshopmap.com'>홈</Link>
          </li>
          <li key='1'>
            <Link href='#purpose'>목적</Link>
          </li>
          <li key='2'>
            <Link href='#steps'>
              일정
              {/* <span className='lg:hidden'>일정</span> */}
              {/* <span className='hidden lg:inline'>캠페인 일정</span> */}
            </Link>
          </li>
          <li key='3'>
            <Link href='#features'>
              특징
              {/* <span className='lg:hidden'>혜택</span>
              <span className='hidden lg:inline'>제공 혜택</span> */}
            </Link>
          </li>
          <li key='4'>
            <Link href='#testimonials'>
              후기
              {/* <span className='lg:hidden'>후기</span>
              <span className='hidden lg:inline'>고객 후기</span> */}
            </Link>
          </li>
          <li key='5'>
            <Link href='#faq'>
              FAQ
              {/* <span className='lg:hidden'>질문</span>
              <span className='hidden lg:inline'>자주묻는질문</span> */}
            </Link>
          </li>
          <li key='6'>
            <Link href='#plans'>
              가격
              {/* <span className='lg:hidden'>가격</span>
              <span className='hidden lg:inline'>가격 정책</span> */}
            </Link>
          </li>
        </ul>
      </div>

      <contact className='flex-wrap items-center justify-center gap-4 md:flex hidden'>
        {/** 동네서점 채널 구독하기 */}
        <Link
          href='https://www.bookshopmap.com/newsletter'
          className='tooltip tooltip-top'
          data-tip='소식지'
        >
          <Newsletter width={24} height={24} className='w-7 h-7 ' />
        </Link>
        <Link
          href='https://www.instagram.com/bookshopmap'
          className='tooltip tooltip-top'
          data-tip='인스타그램'
        >
          <Instagram width={24} height={24} className='w-6 h-6 ' />
        </Link>
        <Link
          href='https://www.twitter.com/bookshopmap'
          className='tooltip tooltip-top'
          data-tip='X 트위터'
        >
          <Twitter width={24} height={24} className='w-6 h-6 ' />
        </Link>
        <Link
          href='https://www.youtube.com/@bookshopmap'
          className='tooltip tooltip-top'
          data-tip='유튜브'
        >
          <Youtube width={24} height={24} className='w-6 h-6 ' />
        </Link>
      </contact>

      {/** 모바일 드롭다운 메뉴 */}
      <div className='dropdown md:hidden z-[3]'>
        <ul className='dropdown-end menu text-lg lg:menu-lg menu-horizontal'>
          <li key='0'>
            <details>
              <summary>바로가기</summary>
              <ul tabIndex='0' className='bg-base-200 dropdown-content w-80 '>
                <li key='0'>
                  <Link href='https://www.bookshopmap.com'>홈</Link>
                </li>
                <li key='1'>
                  <Link href='#purpose'>목적</Link>
                </li>
                <li key='2'>
                  <Link href='#steps'>일정</Link>
                </li>
                <li key='3'>
                  <Link href='#features'>특징</Link>
                </li>
                <li key='4'>
                  <Link href='#testimonials'>후기</Link>
                </li>
                <li key='5'>
                  <Link href='#faq'>FAQ</Link>
                </li>
                <li key='6'>
                  <Link href='#plans'>가격</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  )
}
