import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Link className='bg-red-400 w-full' href="/">Home</Link>
        <Link className='bg-red-400 w-full' href="/contact">Contact</Link>
        <Link className='bg-red-400 w-full' href="/about">About</Link>
    </div>
  )
}

export default Navbar