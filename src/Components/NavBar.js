import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import './Styles.css'

import Frame from '../Assets/Frame.png'
import { UserContext } from '../Context/User-Context'
import ProductCard from './Card/Product-Card'

export default function NavBar(props) {

  const navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext)

  // Function if user logout
  const logout = () => {
    dispatch({
      type: 'LOGOUT',
    })
    navigate('/')
    console.log(state)
  }
  
  return (
    <div className='header'>
      <Link to='/homepage'>
        <img src={Frame} alt='logo' className='header_logo' />
      </Link>

      <div className='header_nav'>
        <div className='header_search'>
          <input className='header_searchInput' type='text' style={{backgroundColor: '#353535', border: '1px solid #BCBCBC', color: 'white'}} />
          <SearchIcon className='header_searchIcon px-1' style={{fontSize: '35px'}} />
        </div>
        <Link to='/user-complain' className={props?.title === 'Complain' ? `text-navbar-active` : `text-navbar`}>Complain</Link>
        <Link to='/profile' className={props?.title === 'Profile' ? `text-navbar-active` : `text-navbar`}>Profile</Link>
        <a onClick={logout} className='text-navbar'>Logout</a>
        </div>
        {/* <ProductCard text={text} /> */}
    </div>
  )
}
