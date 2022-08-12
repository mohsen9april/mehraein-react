import React from 'react'
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Customer from './components/Customer/Customer';
import Footer from './components/Footer/Footer';
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
      <Footer/>
      </>
  )
}

export default App
