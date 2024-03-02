
export default function Menus({menu, isActive}) {
    console.log(isActive); 
    return (<>
        {isActive === true ? (<li className='btn btn-primary btn-block text-lg'>{menu.name}</li>) : 
(<li className='btn btn-block text-lg'>{menu.name}</li>)}
</>
);}

export function Items({item, isActive}) {
    console.log(isActive); 
    return (<>
        {isActive === true ? (<button className='btn btn-ghost text-lg'>{item.title}</button>) : 
(<button className='btn btn-primary text-lg'>{item.title}</button>)}
</>
);}