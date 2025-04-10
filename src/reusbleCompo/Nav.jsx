import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className='bg-blue-700 shadow-2xl w-full fixed top-0 left-0'>
        <nav className='container mx-auto p-4 '>
          <ul className='flex justify-center space-x-7 '>
            <li className='text-white text-2xl font-sans hover:text-gray-400 transition duration-300 focus:text-green-500'><Link to={"/"}>Home</Link></li>
            <li className='text-white text-2xl font-sans hover:text-gray-400 transition duration-300 focus:text-green-500'><Link to={"/About"}>About</Link></li>
            <li className='text-white text-2xl font-sans hover:text-gray-400 transition duration-300 focus:text-green-500'><Link to={"/users"}>users</Link></li>
            <li className='text-white text-2xl font-sans hover:text-gray-400 transition duration-300 focus:text-green-500'><Link to={"/button"}>button</Link></li>
            <li className='text-white text-2xl font-sans hover:text-gray-400 transition duration-300 focus:text-green-500'><Link to={"/login"}>login</Link></li>
            <li className='text-white text-2xl font-sans hover:text-gray-400 transition duration-300 focus:text-green-500'><Link to={"/singup"}>singup</Link></li>
          </ul>
        </nav>
     </div>
    </div>
  )
}

export default Nav