import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Auth from './Pages/Auth';
import Homepage from './Pages/Homepage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route path='/homepage' element={<Homepage />} />
    </Routes>
  );
}

export default App;
