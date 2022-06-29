import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Auth from './Pages/Auth';
import DetailPage from './Pages/Detail-Page';
import Homepage from './Pages/Homepage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route path='/homepage' element={<Homepage />} />
      <Route path='/product/:id' element={<DetailPage />} />
    </Routes>
  );
}

export default App;
