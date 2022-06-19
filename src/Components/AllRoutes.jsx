import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from '../Pages/Cart';
import ContactUs from '../Pages/ContactUs';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Product from '../Pages/Product';
import SignUp from '../Pages/SignUp';
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<PrivateRoute><Cart /></PrivateRoute>} />
    </Routes>
  )
}

export default AllRoutes