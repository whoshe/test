import Menus from '@/component/menus'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Sidebar () {

    const router = useRouter(); 
    console.log(router.pathname);

    const menus = [
        {name:"홈", path: "/"},
        {name:"대시보드", path: "/dashboard"},
        {name:"회원 관리", path: "/dashboard/account"},
        {name:"회원 추가", path: "/dashboard/makeAccount"},
        {name:"캐시 관리", path: "/newsletter"}
    ];

    return (
    <aside className="drawer-side ">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
      <ul className="min-h-screen menu p-4 w-80 bg-base-200 text-base-content">
        {/* Sidebar content here */}
        {menus.map((menu, index) => {
            return ( <Link href={menu.path} key={index}> 
            <Menus menu={menu}
            isActive={router.pathname === menu.path ? true: false}/>
            </Link>)
            }
        )}
      </ul>
      </aside>
    )
}