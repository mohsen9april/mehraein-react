import React from 'react'
import './Products.css'

const Products = () => {
  return (
    <>
    <h1 className='Products stroke-text'>محصولات شرکت کاغذسازی مهرآیین پارس</h1>

    <div className='category'>

        <div className='row'>
            <h3>لاینر</h3>
            <img src='./images/liner.png' />
            <p> لایة کنگره‌ای در مقوای کنگره‌دار، به صورت یک لایه موج‌دار بین دو لایه کاغذ مورد </p>
        </div>
        <div className='row'>
            <h3>تست لاینر</h3>
            <img src='./images/testliner.png' />
            <p> لایة کنگره‌ای در مقوای کنگره‌دار، به صورت یک لایه موج‌دار بین دو لایه کاغذ مورد </p>
        </div>
        <div className='row'>
            <h3> فلوتینگ</h3>
            <img src='./images/fluting.png' alt='/'/>
            <p> لایة کنگره‌ای در مقوای کنگره‌دار، به صورت یک لایه موج‌دار بین دو لایه کاغذ مورد </p>
        </div>
    </div>
    </>
  )
}

export default Products