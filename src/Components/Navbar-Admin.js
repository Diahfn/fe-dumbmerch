import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import './Styles.css'

import Frame from '../Assets/Frame.png'
import { UserContext } from '../Context/User-Context'

export default function NavbarAdmin(props) {

  const [state, dispatch] = useContext(UserContext)

  const navigate = useNavigate()

  const Logout = () => {
    console.log(state)
    dispatch({
      type: 'LOGOUT'
    })
    navigate('/')
  }


  return (
    <div className='header'>
      <Link to='/admin-complain'>
        <img src={Frame} alt='logo' className='header_logo' />
      </Link>

      <div className='header_nav'>
        <Link to='/admin-complain' className={props?.title === 'Admin Complain' ? `text-navbar-active` : `text-navbar`}>Complain</Link>
        <Link to='/category' className={props?.title === 'Category' ? `text-navbar-active` : `text-navbar`}>Category</Link>
        <Link to='/product' className={props?.title === 'Product' ? `text-navbar-active` : `text-navbar`}>Product</Link>
        <a className='text-navbar' onClick={Logout} >Logout</a>
        </div>
    </div>
  )
}
