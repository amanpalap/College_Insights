import React from 'react'
import {HeadLogo,Nav} from "../index"

function Header() {
  return (
    <header className='sticky top-0 z-10 flex flex-wrap items-center justify-between w-full bg-black lg:fixed md:fixed'>
      <HeadLogo/>
      <Nav/>
    </header>
  )
}

export default Header
 