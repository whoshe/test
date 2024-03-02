import Menus from '@/component/menus'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Sidebar () {

    const router = useRouter(); 
    console.log(router.pathname);

    const menus = [
        {name:"대시보드", path: "/dashboard"},
        {name:"회원 관리", path: "/dashboard/account"},
        {name:"캐시 관리", path: "/cashes"}
    ];

    return (
    <>
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}
        {menus.map((menu, index) => {
            return ( <Link href={menu.path} key={index}> 
            <Menus menu={menu}
            isActive={router.pathname === menu.path ? true: false}/>
            </Link>)
            }
        )}
      </ul>
    </>)
}