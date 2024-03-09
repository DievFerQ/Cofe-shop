import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './features/home';
import { Routes, Route } from 'react-router-dom';
import Product from './features/product';
import Footer from './components/footer';
import Cart from './features/cart';
import AllProducts from './features/allProducts';
import NotFound from './features/pageNotFound/notFound';
import ContactUs from './components/contactUs';


function App() {
  return (
   <div>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products/:id' element={<Product />} />
      <Route path='*' element={<NotFound />} />
      <Route path='cart' element={<Cart />} />
      <Route path='/allProducts' element={<AllProducts />} />
      <Route path='/contactUs' element={<ContactUs />} />
    </Routes>
    <Footer />
   </div>
  );
}

export default App;
