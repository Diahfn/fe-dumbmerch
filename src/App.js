import React, { useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Category from './Admin/Category';
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

  useEffect(() => {
    if (state.isLogin === false) {
      navigate('/')
    }
  }, [state])

  return (
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route element={<PrivateRoute />}>
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/product/:id' element={<DetailPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/user-complain' element={<UserComplain />} />
        <Route path='/category' element={<Category />} />
      </Route>
    </Routes>
  );
}

export default App;
