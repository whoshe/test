import BI from '/public/img/logo-singan.svg'
import Link from 'next/link'
import Image from 'next/image'
import Youtube from '/public/img/icons/youtube.svg'
import Twitter from '/public/img/icons/twitter.svg'
import Instagram from '/public/img/icons/instagram.svg'

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
          <li>
            <Link href='https://www.bookshopmap.com'>홈</Link>
          </li>
          <li>
            <Link href='#steps'>
              <span className='lg:hidden'>혜택</span>
              <span className='hidden lg:inline'>일정</span>
            </Link>
          </li>
          <li>
            <Link href='#campaign'>
              <span className='lg:hidden'>일정</span>
              <span className='hidden lg:inline'>캠페인 일정</span>
            </Link>
          </li>
          <li>
            <Link href='#review'>
              <span className='lg:hidden'>후기</span>
              <span className='hidden lg:inline'>고객 후기</span>
            </Link>
          </li>
          <li>
            <Link href='#faq'>
              <span className='lg:hidden'>FAQ</span>
              <span className='hidden lg:inline'>자주묻는질문</span>
            </Link>
          </li>
          <li>
            <Link href='https://market.bookshopmap.com/market-category/ads'>
              <span className='lg:hidden'>가격</span>
              <span className='hidden lg:inline'>가격 정책</span>
            </Link>
          </li>
        </ul>
      </div>

      <contact className='flex-wrap items-center justify-center gap-4 md:flex'>
        {/** 소셜미디어 채널 구독하기 */}
        <Link className='hidden md:flex' href='https://www.instagram.com/bookshopmap'>
          <Instagram width={24} height={24} className='hidden md:flex w-6 h-6 fill-current' />
        </Link>
        <Link className='hidden md:flex' href='https://www.twitter.com/bookshopmap'>
          <Twitter width={24} height={24} className='hidden md:flex w-6 h-6 fill-current' />
        </Link>
        <Link className='hidden md:flex' href='https://www.youtube.com/@bookshopmap'>
          <Youtube width={24} height={24} className='hidden md:flex w-6 h-6 fill-current' />
        </Link>
      </contact>

      {/** 모바일 드롭다운 메뉴 */}
      <div className='dropdown md:hidden z-[3]'>
        <ul className='dropdown-end menu text-lg lg:menu-lg menu-horizontal'>
          <li>
            <details>
              <summary>바로가기</summary>
              <ul tabIndex='0' className='bg-base-200 dropdown-content w-80 '>
                <li>
                  <Link href='https://www.bookshopmap.com'>홈</Link>
                </li>
                <li>
                  <Link href='#benefits'>제공 혜택</Link>
                </li>
                <li>
                  <Link href='#campaign'>캠페인 일정</Link>
                </li>
                <li>
                  <Link href='#review'>고객 후기</Link>
                </li>
                <li>
                  <Link href='#faq'>자주묻는질문</Link>
                </li>
                <li>
                  <Link href='https://market.bookshopmap.com/market-category/ads'>가격 정책</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  )
}
