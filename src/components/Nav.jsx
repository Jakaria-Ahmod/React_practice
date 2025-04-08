import React from 'react'
import menu from '../DamiData/Nav'

const Nav = () => {
  
  return (
    <div>
      <ul className='bg-amber-800 p-1'>
        {
          menu.map(item => (

        <li key={item.id}>
              <a href={ item.path}>{ item.name}</a>
        </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Nav