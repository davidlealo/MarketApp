import React from 'react'
import './LandingStyles.css'
import Login from './Login'


function LandingImage() {
  return (
    <div className='landingHeader'>
       <h1 style={{marginLeft:'20px'}}>Almost 17% of total global food production is wasted</h1>
       <Login />
    </div>
  )
}

export default LandingImage