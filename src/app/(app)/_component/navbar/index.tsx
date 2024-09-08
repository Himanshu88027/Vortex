import React from 'react'
import { Logo } from './logo'
import { Action } from './action'
import { Search } from './search'

function Navbar() {
  return (
    <nav className='fixed top-0 w-full px-2 lg:px-4 h-20 bg-[#252731] flex justify-between items-center shadow-sm z-[49]'>
        <Logo />
        <Search />
        <Action />
    </nav>
  )
}

export default Navbar