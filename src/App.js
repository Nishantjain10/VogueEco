
import Login from './screens/Form';
import Landing from './screens/Landing';
import Signup from './screens/Signup';
import Profile from './screens/Profile';
import Success from './screens/Success'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Landing/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/success' element={<Success/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
  
}

export default App;
