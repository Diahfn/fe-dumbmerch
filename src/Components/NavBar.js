import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import './Styles.css'

import Frame from '../Assets/Frame.png'
import { UserContext } from '../Context/User-Context'

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
          <input className='header_searchInput' type='text' />
          <SearchIcon className='header_searchIcon' />
        </div>
        <Link to='/user-complain' className={props?.title === 'Complain' ? `text-navbar-active` : `text-navbar`}>Complain</Link>
        <Link to='/profile' className={props?.title === 'Profile' ? `text-navbar-active` : `text-navbar`}>Profile</Link>
        <a onClick={logout} className='text-navbar'>Logout</a>
        </div>
    </div>
  )
}
