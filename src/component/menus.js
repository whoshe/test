export default function Menus({ menu, isActive }) {
  console.log(isActive)
  return (
    <>
      {isActive === true ? (
        <li className='btn btn-primary btn-block text-lg'>{menu.name}</li>
      ) : (
        <li className='btn btn-block text-lg'>{menu.name}</li>
      )}
    </>
  )
}

export function Items({ menu, isActive }) {
  console.log(isActive)
  return (
    <>{isActive === true ? '' : <li className='btn btn-ghost text-primary text-xl'>{menu.name}</li>}</>
  )
}
