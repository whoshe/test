import LandingFooter from '@/component/landing/landingFooter';

export default function LandingLayout({children}) {
    return (
    <div className="flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16">
      {children}
    </div>
        )
}
