import Header from '@/component/header';
import NewsletterFooter from './newsletterFooter';

export default function NewsletterLayout ({ children }) {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16">
    <Header/>
      <div className="flex-grow">
        <main className="my-0 py-16">{children}</main>
      </div>
      <NewsletterFooter />
    </div>
  );
};
