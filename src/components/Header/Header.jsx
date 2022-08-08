import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='headerContainer flexSB'>

        <div className='logo flexSB'>
          <img src='./images/logo.png' alt='/' />
          <h2>کاغذسازی مهرآیین پارس</h2>
        </div>

        <div>
          <button className='outline-btn-header'>حساب کاربری</button>
        </div>

        <nav>
            <ul className='nav_menu'>
                <li> <a href='/'> پروژه خط جدید </a> </li>
                <li> <a href='/'>تماس با ما</a> </li>
                <li> <a href='/'>درباره ما</a> </li>
                <li> <a href='/'>چارت سازمانی</a> </li>
                <li> <a href='/'>گالری</a> </li>
                <li> <a href='/'>محصولات</a> </li>
                <li> <a href='/'>صفحه اصلی</a> </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header