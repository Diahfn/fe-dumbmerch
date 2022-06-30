import React, { useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import PrivateRoute from './Components/Private-Route/Private-Route';
import { UserContext } from './Context/User-Context';

import Auth from './Pages/Auth';
import DetailPage from './Pages/Detail-Page';
import Homepage from './Pages/Homepage'
import Profile from './Pages/Profile';
import UserComplain from './Pages/User-Complain';

function App() {

  const [state] = useContext(UserContext)

  const navigate = useNavigate()

  // Check if user login or not
  const checkAuth = () => {
    if (state.isLogin === false) {
      navigate('/')
    } 
  }

  useEffect(() => {
      checkAuth()
  }, [])

  // console.log(state)

  return (
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route element={<PrivateRoute />}>
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/product/:id' element={<DetailPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/user-complain' element={<UserComplain />} />
      </Route>
    </Routes>
  );
}

export default App;
