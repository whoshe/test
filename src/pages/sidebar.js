import React from "react";
import Link from 'next/link';
import Menus from './menus';
import { useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';

export default function Sidebar() {
    const router = useRouter(); 
    // console.log(router);

    const menus = [
        {name:"대시보드", path: "/"},
        {name:"회원 관리", path: "/member"},
        {name:"캐시 관리", path: "/cashes"}
    ];
    return (
    <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
      {/* Page content here */}
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button">Open drawer</label>
    </div> 
    <div className="drawer-side">
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
    
    </div>
  </div>)
}