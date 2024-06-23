import React from 'react'
import card1 from '../assets/card1.webp'
import card2 from '../assets/card2.webp'
import card3 from '../assets/card3.webp'


function CardList() {
  return (
    <div className='card-list'>
        <div className='card'>
            <img src={card1} className='card-img' />
            <h2 className='card-title'>Feed your employees</h2>
            <a className='card-link'>Create a business account</a>
        </div>
        <div className='card'>
            <img src={card2} className='card-img' />
            <h2 className='card-title'>Your restaurent, delivered</h2>
            <a className='card-link'>Add your restaunrent</a>
        </div>
        <div className='card'>
            <img src={card3} className='card-img' />
            <h2 className='card-title'>Deliver with Uber Eats</h2>
            <a className='card-link'>Sign up to deliver</a>
        </div>
    </div>
  )
}

export default CardList
