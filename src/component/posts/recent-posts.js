import Layout from '@/component/layout'
import { NextSeo } from 'next-seo'
import { getSortedPostsData } from '/src/lib/posts'
import Date from '/src/component/date'
import Link from 'next/link'

// 최신 3개의 목록만 보여주는 컴포넌트
export default function Blog({ allPostsData }) {
  // 최신 3개의 게시물만 가져오기
  // allPostsData가 undefined인 경우 빈 배열로 처리
  const latestPosts = (allPostsData || []).slice(0, 3)

  return (
    <section>
      <ul className='grid auto-rows-fr gap-4'>
        {latestPosts.map(({ id, date, title }) => (
          <li className='card card-compact border hover:border-neutral' key={id}>
            <div className='card-body grid grid-flow-row content-between'>
              <Link className='card-title text-lg' href={`/posts/${id}`}>
                {title}
              </Link>
              <div className='text-base text-neutral-400'>
                <Date dateString={date} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  // allPostsData가 없는 경우 빈 배열 반환
  return {
    props: {
      allPostsData: allPostsData || [],
    },
  }
}
