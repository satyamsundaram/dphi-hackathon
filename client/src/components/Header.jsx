import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <header className='bg-[#fff] h-16 pl-16 pt-3'>
        <Link to="/"><img src="/assets/icons/dphi_logo.png" alt='logo' /></Link>
    </header>
  )
}

export default Header