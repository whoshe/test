import  Link from 'next/link';

export default function Header () {
    return (
    <>
    <h1>메인 머리글</h1> 
    <Link href='/'>홈</Link>
    
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button">Open drawer</label>
    </>)
}