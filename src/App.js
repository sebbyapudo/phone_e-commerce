import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Product from './components/ProductList';
import ProductList from './components/Navbar';
import Default from './components/Default';
import Details from './components/Details';
import Cart from './components/Cart';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Product/>
      <ProductList/>
      <Default/>
      <Details/>
      <Cart/>
  </React.Fragment>
  );
}

export default App;
