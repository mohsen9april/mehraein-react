import React from 'react'
import './App.css';
import Customer from './components/Customer/Customer';
import Header from './components/Header/Header'
import ImageSlider from './components/ImageSlider/ImageSlider';
import Products from './components/Products/Products';



const App = () => {
  return (
    <>
      <Header/>
      <ImageSlider/>
      <Products/>
      <Customer/>
      </>
  )
}

export default App
