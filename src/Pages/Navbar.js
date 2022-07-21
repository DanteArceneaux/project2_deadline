import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full h-16 bg-blue-600 flex items-center px-10 py-2 justify-between' >
        <Link to="/" className='text-white text-3xl font-semibold '>Project 2</Link>
        <Link to="/" className='text-white text-3xl font-semibold '>Home</Link>
        <Link to="/users" className='text-white text-3xl font-semibold '>Users</Link>
        <Link to="/" className='text-white text-3xl font-semibold '>Weapons</Link>
        <Link to="/" className='text-white text-3xl font-semibold '>Items</Link>
        <Link to="/" className='text-white text-3xl font-semibold '>Armor</Link>
        
    </div>
  )
}

export default Navbar