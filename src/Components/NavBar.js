import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import './Styles.css'

import Frame from '../Assets/Frame.png'

export default function NavBar() {
  return (
    <div className='header'>
        <Link to='/homepage'>
            <img src={Frame} alt='logo' className='header_logo' />
        </Link>

        <div className='header_nav'>
            <div className='header_search'>
                <input className='header_searchInput' type='text' />
                <SearchIcon className='header_searchIcon' />
            </div>
            <Link to='/user-complain' className='header_option'>Complain</Link>
            <Link to='/profile' className='header_option'>Profile</Link>
            <Link to='#' className='header_option'>Logout</Link>
        </div>
    </div>
  )
}
