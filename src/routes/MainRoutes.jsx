import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import About from '../pages/About'
import PageNotFound from '../pages/PageNotFound'
import Login from '../pages/Login'
import Register from "../pages/Register"
import Cart from '../pages/Cart'
import Profile from '../pages/Profile'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register/*" element={<Register/>}/>
      <Route path="/cart/*" element={<Cart/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default MainRoutes