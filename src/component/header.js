import  Link from 'next/link';

export default function Header () {
    return (
    <>
    <nav className='flex gap-8 justify-center items-center'>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button">Open drawer</label>
    <Link href='/'>홈</Link>
    <h1>메인 머리글</h1> 
    </nav>
    
    
    </>)
}