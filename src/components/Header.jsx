import React from 'react'

const Header = () => {
  return (
    <header className='headerContainer flexSB'>

        <div className='logo flexSB'>
          <img src='./images/logo.png' alt='' />
          <h2>کاغذسازی مهرآیین پارس</h2>
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
                <button className='outline-btn'>حساب کاربری</button>
            </ul>
        </nav>
    </header>
  )
}

export default Header