import Link from 'next/link'
import Script from 'next/script'
import BiOrigin from '/public/img/logo-origin.svg'
import Youtube from '/public/img/icons/youtube.svg'
import Twitter from '/public/img/icons/twitter.svg'
import Instagram from '/public/img/icons/instagram.svg'

export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  const short_year = year.toString().substr(-2)

  return (
    <>
      <footer className='bg-gradient-to-b from-base-100 to-green-200 dark:to-green-800 p-4 py-16 '>
        {/* 바닥글 */}
        <nav className='flex flex-wrap items-center justify-center py-8 text-neutral-400'>
          {/* 탐색 */}
          <Link href='https://www.dongneseojeom.com' className='btn btn-sm btn-ghost'>
            회사소개
          </Link>
          <Link href='https://www.bookshopmap.com/terms-ko' className='btn btn-sm btn-ghost'>
            이용약관
          </Link>
          <Link href='https://www.bookshopmap.com/privacy-ko' className='btn btn-sm btn-ghost'>
            개인정보보호
          </Link>
          <Link href='https://market.bookshopmap.com/delivery-ko' className='btn btn-sm btn-ghost'>
            배송및환불
          </Link>
        </nav>
        <div className='footer max-md:footer-center mx-auto max-w-7xl gap-6'>
          {/** 연락처 */}
          <contact className='container mx-auto flex max-sm:flex-col justify-center lg:justify-between gap-4'>
            <div className='flex items-center lg:grow'>
              {/** 웹사이트 */}
              <Link
                href='https://www.bookshopmap.com'
                className='btn btn-sm btn-ghost text-xl text-neutral-400'
              >
                <BiOrigin width={16} height={16} className='w-8 h-8 fill-current' />
                동네서점
              </Link>
              <span className='hidden lg:block text-neutral-400'>
                함께 만드는 동네서점 지도 <p />
                데이터 및 콘텐츠의 저작권은 각 해당 창작자 또는 제보자, 주식회사 동네서점에
                있습니다.
              </span>
            </div>

            <div className='flex flex-wrap items-center justify-center gap-4'>
              {/** 소셜미디어 채널 구독하기 */}
              <Link href='https://www.instagram.com/bookshopmap'>
                <Instagram width={24} height={24} className='w-6 h-6 text-neutral-400' />
              </Link>
              <Link href='https://www.twitter.com/bookshopmap'>
                <Twitter width={24} height={24} className='w-6 h-6 text-neutral-400' />
              </Link>
              <Link href='https://www.youtube.com/@bookshopmap'>
                <Youtube width={24} height={24} className='w-6 h-6 text-neutral-400' />
              </Link>

              {/** 카카오톡 채널 추가하기 */}
              <div
                className=''
                id='kakao-talk-channel-add-button'
                data-channel-public-id='_xeLPbC'
                data-size='small'
                data-support-multiple-densities='true'
              ></div>

              <Script id='kakao-talk-channel-add-button'>
                {`            
              window.kakaoAsyncInit = function () {
              Kakao.Channel.createAddChannelButton({
                container: "#kakao-talk-channel-add-button",
              });
            };

            (function (d, s, id) {
              var js,
                fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s);
              js.id = id;
              js.src =
                "https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.channel.min.js";
              js.integrity =
                "sha384-bg2pMhokxyx1zeEM2ol2hJtBagKMjRIZDVI/KITe+j2U5K+Or6HPY1lWDWY8ubEN";
              js.crossOrigin = "anonymous";
              fjs.parentNode.insertBefore(js, fjs);
            })(document, "script", "kakao-js-sdk");
            `}
              </Script>
            </div>
          </contact>
        </div>
        <aside className='grid-flow-col text-center items-center justify-self-center lg:place-self-center lg:justify-self-start my-6'>
          {/* 저작권 */}
          <copyright className='text-neutral-400'>
            <Link
              href='https://www.dongneseojeom.com'
              className='hover:text-primary'
              rel='noopener'
            >
              Copyright © 2015-{short_year} Dongneseojeom Inc. All right reserved
            </Link>
          </copyright>
        </aside>
      </footer>
    </>
  )
}
