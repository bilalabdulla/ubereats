import React from 'react'

function Countries() {
  return (
    <div className='cities'>
        <div className='cities-head'>
            <h2 className='card-title'>Countries with Uber Eats</h2>
            <a className='card-link view'>View all countries</a>
        </div>
        <div className='city-list'>
            <div className='city-names'>
                <p>Australia</p>
                <p>Belgium</p>
                <p>Canada</p>
                <p>Chile</p>
                <p>Costa Rica</p>
                <p>Dominican Republic</p>
                <p>Ecuador</p>
                <p>El Salvador</p>
            </div>
            <div className='city-names'>
                <p>France</p>
                <p>Germany</p>
                <p>Guatemala</p>
                <p>Ireland</p>
                <p>Italy</p>
                <p>Japan</p>
                <p>Kenya</p>
                <p>Mexico</p>
            </div>
            <div className='city-names'>
                <p>Netherlands</p>
                <p>New Zealand</p>
                <p>Panama</p>
                <p>Poland</p>
                <p>Portugal</p>
                <p>South Africa</p>
                <p>Spain</p>
                <p>Sri Lanka</p>
            </div>
            <div className='city-names'>
                <p>Sweden</p>
                <p>Switzerland</p>
                <p>Taiwan</p>
                <p>United Kigdom</p>
                <p>United States</p>
            </div>
        </div>
        <a className='hidden'>View all countries</a>
    </div>
  )
}

export default Countries
