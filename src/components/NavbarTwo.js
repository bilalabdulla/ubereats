import React, { useState } from 'react'

function NavbarTwo() {
  const [navbarChange, setNavBarChange] = useState(false)
  const changeNavbarColor = () => {
    if (window.scrollY >= 500){
      setNavBarChange(true)
    }
    else{
      setNavBarChange(false)
    }
  }
  window.addEventListener('scroll', changeNavbarColor)

  return (
    <div className={navbarChange 
      ? 'navbar-two view-two' : 'navbar-two'
    }>
      <div className='nav-left'>
        <i className='fa-solid fa-bars bar-icon'></i>
        <h2 className='logo-title'>Uber <span className='logo-bold'>Eats</span></h2>
        <button className='delivery-btn'>
          <i className='fa-solid fa-location-dot'></i>
          <p>Enter Delivery Address </p>
        </button>
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

export default NavbarTwo