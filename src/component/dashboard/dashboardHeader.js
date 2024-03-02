import { Link } from 'next/link';
import { useRouter } from 'next/router';
import { Menus, Items } from '@/component/menus';



export default function DashboardHeader () {
    const items = [
        {
          id: '1',
          title: '회원 목록',
          href: '/dashboard/account',
        },
         {
          id: '2',
          title: '추가',
          href: '/dashboard/makeAccount',
        }
      ]
    const router = useRouter(); 
    console.log(router.pathname);

    return (<>
    <h1>대시보드 머리글</h1>
    
<nav> 
  {items.map((item) => 
  (<>
      <li
      key={item.id} 
       onClick={() => {router.push(item.href)}} 
       className={router.pathname === item.href ? 'btn btn-ghost' : 'btn btn-primary'}
     >
      {item.title}
    </li>
     {/* <Items item={item}
     isActive={router.pathname === item.href ? true: false}/> */}
    </>
  ))}
</nav>
</>
    )
}