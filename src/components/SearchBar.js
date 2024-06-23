import React, { useState } from 'react'

function SearchBar() {
  const [searchbar, setSearchbar] = useState(false)
  const changeNavbarColor = () => {
    if (window.scrollY >= 500){
      setSearchbar(true)
    }
    else{
      setSearchbar(false)
    }
  }
  window.addEventListener('scroll', changeNavbarColor)
  return (
    <div className={searchbar 
        ? 'navbar-three view-three' : 'navbar-three'
      }>
          <div className='hidden-search'>
              <div className='hidden-content'>
                  <i className='fa-solid fa-location-dot location-icon'></i>
                  <input type='text' placeholder='Enter delivery address'/>
              </div>
          </div>
    </div>
  )
}

export default SearchBar
