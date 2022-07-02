import React, { useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import AddCategory from './Admin/Add-Category';
import AddProduct from './Admin/Add-Product';
import Category from './Admin/Category';
import AdminComplain from './Admin/Complain';
import EditCategory from './Admin/Edit-Category';
import EditProduct from './Admin/Edit-Product';
import Product from './Admin/Product';
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
      navigate('/auth')
    }
  }, [state])

  return (
    <Routes>
      <Route path='/auth' element={<Auth />} />
      <Route path='/' element={<PrivateRoute />}>
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/product/:id' element={<DetailPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/user-complain' element={<UserComplain />} />
        <Route path='/admin-complain' element={<AdminComplain />} />
        <Route path='/category' element={<Category />} />
        <Route path='/edit-category/:id' element={<EditCategory />} />
        <Route path='/add-category' element={<AddCategory />} />
        <Route path='/product' element={<Product />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/edit-product/:id' element={<EditProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
