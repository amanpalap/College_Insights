import React from 'react'
import { NavLink } from 'react-router-dom'

function NavLinks({
    className,
    classname
}) {
  return (
      <div className={`text-white flex ${className} w-full justify-between flex-wrap`}>
      <NavLink className={`${classname}`} to="/">Home</NavLink>
      <NavLink className={`${classname}`} to="/SignUp">Login/SingUp</NavLink>
      <NavLink className={`${classname}`} to="/Societies">Societies</NavLink>
      <NavLink className={`${classname}`} to="/Sports">Sports</NavLink>
      <NavLink className={`${classname}`} to="/Exam">Exam</NavLink>
      <NavLink className={`${classname}`} to="/About-Us">About</NavLink>
    </div>
    
  )
}

export default NavLinks
