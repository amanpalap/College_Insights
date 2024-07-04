import React from 'react'
import Logo from "../Body/Images/Logo.png"

function HeadLogo() {
  return (
    <div className='flex items-center justify-between w-32 h-16 ml-4 md:ml-8'>
        <img src={Logo} alt="" />
      
    </div>
  )
}

export default HeadLogo
