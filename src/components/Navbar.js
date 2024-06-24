import React, { useState } from 'react'

function Navbar() {
  const [colorChange, setColorChange] = useState(false)
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true)
    } else {
      setColorChange(false)
    }
  }
  window.addEventListener('scroll', changeNavbarColor)

  return (
    <div className={colorChange 
      ? 'navbar color-change' : 'navbar'
    }>
      <div className='nav-left'>
        <i className='fa-solid fa-bars bar-icon'></i>
        <h2 className='logo-title'>Uber <span className='logo-bold'>Eats</span></h2>
      </div>
      <div className='nav-right'>
        <button className='log-btn'>Log in</button>
        <button className='log-btn-two'>
        <i class="fa-solid fa-user user-icon"></i>
        </button>
        <button className='sign-btn'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar