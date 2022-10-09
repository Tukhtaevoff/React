import React from 'react'
import logo from "../../images/logo.svg"

const header = () => {
  return (
    <header>
        <div className="container header__container">
        <nav className="navbar">
     <a href="/" className="coffee">
     <img src={logo} alt="bg img"/>
     </a>
     <ul className="nav-list">
         <li>
             <a className="link" href="/">
                 HOME
             </a>
         </li>
         <li>
            <a className="link" href="#">
             ABOUT US
            </a>
             
         </li>
         <li> 
             <a className="link" href="#">
                 CREATE YOUR PLAN
             </a>
         </li>
     </ul>
    </nav>
        </div>
     </header>
  )
}

export default header