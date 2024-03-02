
export default function Menus({menu, isActive}) {
    console.log(isActive); 
    return (<>
        {isActive === true ? (<li className='btn btn-primary btn-block text-lg'>{menu.name}</li>) : 
(<li className='btn btn-block text-lg'>{menu.name}</li>)}
</>
);}