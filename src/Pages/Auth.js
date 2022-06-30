import React, { useState, useContext } from 'react'

import Frame from '../Assets/Frame.png'
import Login from '../Components/Auth/Login'
import Register from '../Components/Auth/Register'
import { UserContext } from '../Context/User-Context'

export default function Auth() {

    const [showLogin, setShowLogin] = useState(false)

  return (
    <div className='bg d-flex justify-content-around'>
        <div className='d-flex flex-column justify-content-center'>
            <div>
                <img src={Frame} alt='Frame-logo' width='230px' />
            </div>
            <div className='merch_description'>
                <h1 style={{ fontWeight: 'bold', letterSpacing: '1.5px'}}>Easy, Fast and Reliable</h1>
                <p>Go shopping for merchandise, just go to dumb merch shopping the biggest merchandise in <b>Indonesia</b> </p>
            </div>
            <div className='mt-4'>
                <button 
                    className='button' 
                    style={{background: '#F74D4D'}}
                    onClick={() =>setShowLogin(true)}
                >
                    Login
                </button>
                <button 
                    className='button' 
                    style={{background: 'transparent'}}
                    onClick={() =>setShowLogin(false)}
                >
                    Register
                </button>
            </div>
        </div>
        <div className='d-flex align-items-center'>
            <div>
                {
                    showLogin ?
                    <Login /> : 
                    <Register />
                }
            </div>
        </div>
    </div>
  )
}
