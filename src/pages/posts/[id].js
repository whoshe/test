import Layout from '@/component/layout'
import { getAllPostIds, getPostData } from '/src/lib/posts'
import Date from '/src/component/date'
import { NextSeo } from 'next-seo'

export default function Post({ postData }) {
  return (
    <>
      <NextSeo
        title={postData.title}
        openGraph={{
          url: '',
          images: [{ url: '' }],
        }}
      />
      <section className='container mx-auto'>
        <article className='prose'>
          <h1>{postData.title}</h1>
          <div className='text-base'>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </section>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

Post.getLayout = (page) => <Layout>{page}</Layout>
