import React from 'react'

function Header() {
  return (
    <div className='header'>
      <h1 className='title-one'>Order delivery near you</h1>
      <div className='header-mid'>
        <div className='address'>
            <i class="fa-solid fa-location-dot address-icon"></i>
            <input className='address-input' placeholder='Enter delivery address'/>
        </div>
        <div className='delivery'>
            <i class="fa-solid fa-clock delivery-icon"></i>
            <select className='delivery-select'>
                <option className='option'>Deliver now</option>
                <option className='option'>Schedule for later</option>
            </select>
        </div>
        <button className='search-btn'>Search here</button>
      </div>
      <div className='header-end'>
        <p>Or</p>
        <a>Sign in</a>
      </div>
    </div>
  )
}
export default Header
