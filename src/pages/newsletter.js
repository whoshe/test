import NewsletterLayout from '@/component/newsletter/newsletterLayout';

export default function Newsletter () {
  return <main>뉴스레터</main>
}

Newsletter.getLayout = (page) => (
  <NewsletterLayout>{page}</NewsletterLayout>
);
