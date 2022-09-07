import React from 'react';
import User from './components/User';
import UserProducts from './components/UserProducts'
import Product from './components/Product';
import Navbar from "./components/Navbar"
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import Orders from './components/Orders';
const App = ()=> {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<UserProducts/>}/>
      <Route exact path='/users' element={<User/>}/>
      <Route exact path='/products' element={<Product/>}/>
      <Route exact path='/orders' element={<Orders/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App;