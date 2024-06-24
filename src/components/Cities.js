import React from 'react'
import Map from '../assets/map.jpg'

function Cities() {
  return (
    <div className='cities'>
        <div className='cities-head'>
            <h2 className='card-title'>Cities near me</h2>
            <a className='card-link view' href='#'>View all 500 cities</a>
        </div>
        <img src={Map} className='map-img' alt=''></img>
        <div className='city-list'>
            <div className='city-names'>
                <p>Akron</p>
                <p>Albuqurque</p>
                <p>Bridgeport</p>
                <p>Concord</p>
                <p>Dayton</p>
                <p>El Paso</p>
            </div>
            <div className='city-names'>
                <p>Hatford</p>
                <p>Houston</p>
                <p>Indianapolis</p>
                <p>McAllen</p>
                <p>Mesa</p>
                <p>Milwaukee</p>
            </div>
            <div className='city-names'>
                <p>Nashville</p>
                <p>New Orleans</p>
                <p>Oklahoma City</p>
                <p>Omaha</p>
                <p>Orlando</p>
                <p>Palm Bay</p>
            </div>
            <div className='city-names'>
                <p>Providence</p>
                <p>Queens</p>
                <p>San Antonio</p>
                <p>Stony Brook</p>
                <p>Tucson</p>
                <p>West Hollywood</p>
            </div>
            <a className='hidden' href='#'>View all 500 cities</a>
        </div>
    </div>
  )
}

export default Cities
