import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex gap-3 bg-black text-white p-3'>
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink to="/about">
            About
        </NavLink>
        <NavLink to="/contact">
            Contact
        </NavLink>
        <NavLink to="/product">
            Product
        </NavLink>
        <NavLink to="/counter">
            Counter
        </NavLink>
        <NavLink to="/post">
            Post
        </NavLink>
    </div>
  )
}

export default Navbar