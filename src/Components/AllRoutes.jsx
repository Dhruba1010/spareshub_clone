import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactUs from '../Pages/ContactUs';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

export default AllRoutes