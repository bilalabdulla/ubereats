import React, { useState } from 'react'

function Header() {

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <header>
    <div className='header'>
      <h1 className='title-one'>Order delivery near you</h1>
      <div className='header-mid'>
        <div className='address'>
            <i class="fa-solid fa-location-dot address-icon"></i>
            <input className='address-input' placeholder='Enter delivery address'/>
        </div>
        <div className='delivery'>
            <i class="fa-solid fa-clock delivery-icon"></i>
            <select className='delivery-select' onChange={toggleModal}>
                <option className='option'>Deliver now</option>
                <option onClick={toggleModal} className='option btn-modal'>Schedule for later</option>
            </select>
        </div>
        <button className='search-btn'>Search here</button>
      </div>
      <div className='header-end'>
        <p>Or</p>
        <a>Sign in</a>
      </div>
    </div>
    
    {modal && (
        <div className='modal'>
        <div className='overlay' onClick={toggleModal}></div>
        <div className='modal-content'>
          <h2 className='modal-title'>Pick a time</h2>
          <select className='modal-select'>
            <option>June 24</option>
            <option>June 25</option>
            <option>June 26</option>
            <option>June 27</option>
            <option>June 28</option>
            <option>June 29</option>
            <option>June 30</option>
          </select>
          <select className='modal-select'>
            <option>5 AM</option>
            <option>6 AM</option>
            <option>7 AM</option>
            <option>8 AM</option>
            <option>9 AM</option>
            <option>10 AM</option>
          </select>
          <button className='modal-in-btn'>Schedule</button>
          <button className='modal-in-btn-two'>Deliver now</button>
          <button className='close-modal' onClick={toggleModal}>X</button>
        </div>
      </div>
    )}
    </header>
  )
}
export default Header
