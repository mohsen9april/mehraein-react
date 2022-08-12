import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        
        <footer class="footer-distributed">

            <div class="footer-right">
                
                <h3>شرکت کاغذسازی  <span> <strong>مهرآیین پارس </strong> </span></h3>

                <ul class="footer-links">
                    <li><a href="/">صفحه اصلی </a></li>
                    <li><a href="/">محصولات</a></li>
                    <li><a href="/"> گالری </a></li>
                    <li><a href="/"> چارت سازمانی</a></li>
                </ul>

            </div>

             <div class="footer-center">
                <div>
                    <i class="fa fa-map-marker"></i>
                    <span>ایران</span>
                    <br/>
                    <p> تهران کیلومتر ۲۰ جاده قدیم تهران قم روبروی مهدی آباد خیابان بعثت پلاک ۸</p>
                </div>

                <div>
                    <i class="fa fa-phone"></i>
                    <p>+21 5654-66 20</p>
                </div>
                <div>
                    <i class="fa fa-envelope"></i>
                    <p><a href="/">Contact@mehraeinpars.com</a></p>
                </div>
            </div>

            
            <div class="footer-left">
                <p class="footer-company-about">
                    <span>درباره ما </span>
                </p>
                <div class="footer-icons">
                    <a href="/"><i class="fa fa-facebook"></i></a>
                    <a href="/"><i class="fa fa-instagram"></i></a>
                    <a href="/"><i class="fa fa-linkedin"></i></a>
                    <a href="/"><i class="fa fa-twitter"></i></a>
                    <a href="/"><i class="fa fa-youtube"></i></a>
                </div>
            </div>

            <div className='footer-logo'>
                <img src='./images/logo.png' alt='/' />
                <p>Mehraeinpars</p>
            </div>

        </footer>
            <hr />
            <p class="footer-company-name">Copyright © 2021 Mehraeinpars All rights reserved</p>
    </div>
  )
}

export default Footer
