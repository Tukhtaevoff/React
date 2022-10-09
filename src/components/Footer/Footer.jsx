import React from 'react'

import logoLight from "../../images/logo-light.svg"

const Footer = () => {
  return (
    <footer>
  <div className="container footer__container">
  <a href="/" className="footer-img">
         <img src={logoLight} alt="" />
         </a>
  <nav className="footer">
         <ul className="footer-list">
             <li className="footer-item">
                 <a className="link" href="/">
                     HOME
                 </a>
             </li>
             <li className="footer-item">
               <a className="link" href="/">
                 ABOUT US
               </a>  
             </li>
             <li className="footer-item">
                <a className="link" href="/">
                 CREATE YOUR PLAN
                </a> 
             </li>
         </ul>
         <div className="social-media">
         <i className="fa-brands fa-facebook"></i>
         <i className="fa-brands fa-twitter"></i>
         <i className="fa-brands fa-instagram"></i>
         </div>
     </nav>
  </div>
     
 </footer>
  )
}

export default Footer