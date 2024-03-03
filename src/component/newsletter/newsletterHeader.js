import  Link from 'next/link';

export default function NewsletterHeader () {
    return (
    <>
    <nav className='flex gap-8 justify-center items-center'>
    <Link href='/'>홈</Link>
    <h1>뉴스레터 머리글</h1> 
    </nav>
    
    
    </>)
}