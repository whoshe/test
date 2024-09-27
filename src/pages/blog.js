import Layout from '@/component/layout'
import { NextSeo } from 'next-seo'
import { getSortedPostsData } from '/src/lib/posts'
import Date from '/src/component/date'
import Link from 'next/link'

// 환영 인사
function Welcome({ name }) {
  return <>어서오세요 {name} 님, 블로그에 오신 것을 환영합니다.</>
}

export default function Blog({ allPostsData }) {
  return (
    <>
      <NextSeo
        title='블로그'
        openGraph={{
          url: '',
          images: [{ url: '' }],
        }}
      />
      <div className='container mx-auto'>
        <h1 className='text-3xl'>블로그</h1>
        <p>
          <Welcome name='남반장' />
        </p>
        <section className='my-8'>
          <ul className='grid auto-rows-fr gap-4'>
            {allPostsData.map(({ id, date, title }) => (
              <li className='card card-compact border hover:border-neutral-400' key={id}>
                <Link href={`/posts/${id}`}>
                  <div className='card-body grid grid-flow-row content-between'>
                    <span className='card-title text-lg'>{title}</span>
                    <div className='text-base text-neutral-400'>
                      <Date dateString={date} />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

Blog.getLayout = (page) => <Layout>{page}</Layout>
