import NewsletterLayout from '@/component/newsletterLayout';

export default function Newsletter () {
  return <main>뉴스레터</main>
}

Newsletter.getLayout = (page) => (
  <NewsletterLayout>{page}</NewsletterLayout>
);
