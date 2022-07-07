import React from 'react'
import './App.css';
import Header from './components/Header'
import ImageSlider from './components/ImageSlider';
import Products from './components/Products';


const App = () => {
  return (
    <>
      <Header/>
      <ImageSlider/>
      <Products/>
    </>
  )
}

export default App
