import React from "react"
import ReactDOM from "react-dom"
import "../src/style/style.css"

import Coffee from "../src/images/Coffee.png"
import logo from "../src/images/logo.svg"
import coffeeBean from "../src/images/coffee-bean.svg"
import truck from "../src/images/truck.svg"
import gift from "../src/images/gift.svg"
import one from  "../src/images/01.svg"
import two from  "../src/images/02.svg"
import three from  "../src/images/03.svg"
import logoLight from "../src/images/logo-light.svg"

const App = () => {
  return (
    <>
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
 <main>
     <section className="section-1">
      <div className="container section-1__container">
             <h2 className="h2">Great coffee made simple.</h2>
         <p>Start your mornings with the world's best coffees. Try our</p>
         <p>expertly curated artisan coffees from our best roasters</p>
         <p>delivered directly to your door, at your schedule.</p>
         <button className="button">
             Create your plan
         </button>
      </div>
         
        
     </section>
     <section className="section-2">
      <div className="container section-2__container">
      <ul className="section-list">
             <li className="list-item">
               <img src={Coffee} alt=""/>
             <h3 className="h3">Gran expresso</h3>
             <p>Light and flavorful blend with cocoa</p>
             <p>and black pepper for an intense</p>
             <p>experience.</p>
         
         </li>
         <li className="list-item">
             <img src={Coffee} alt=""/>
           <h3 className="h3">Planalto</h3>
           <p>Brazilian dark roast with rich and</p>
           <p>velvety body, and hints of fruits and</p>
           <p>nuts.</p>
       
       </li>
       <li className="list-item">
         <img src={Coffee} alt=""/>
       <h3 className="h3">Piccollo</h3>
       <p>Mild and smooth blend featuring</p>
       <p>notes of toasted almond and dried</p>
       <p>cherry.</p>
   
   </li>
   <li className="list-item">
     <img src={Coffee} alt=""/>
   <h3 className="h3">Danche</h3>
   <p>Ethiopian hand-harvested blend</p>
   <p>densely packed with vibrant fruit</p>
   <p>notes.</p>

</li>
             
         </ul>
      </div>
         
     </section>
     <section className="section-3">
      <div className="container section-3__container">
      <div className="paragraph">
            <h2 className="title">Why choose us?</h2>
          <p>A large part of our role is choosing which particular coffees will be featured </p>
          <p>in our range. This means working closely with the best coffee growers to give</p>
          <p> you a more impactful experience on every level.</p>
      </div>
         <ul className="section-3-list">
             <li className="section-3-item">
               <img className="img-2" src={coffeeBean} alt=""/>
             <h3>Best quality</h3>
             <p>Discover an endless variety of the</p>
             <p>world's best artisan coffee from each</p>
             <p> of our roasters.</p>
             
             </li>
             <li className="section-3-item">
                 <img className="img-2" src={truck} alt=""/>
               <h3>Exclusive benefits</h3>
               <p>Special offers and swag when you</p>
               <p>subscribe, including 30% off your</p>
               <p>first shipment.</p>
               
               </li>
               <li className="section-3-item">
                 <img className="img-2" src={gift} alt=""/>
               <h3>Free shipping</h3>
               <p>We cover the cost and coffee is</p>
               <p>delivered fast. Peak freshness:</p>
               <p>guaranteed.</p>
               
               </li>
             
         </ul>
      </div>
        
     </section>
     <section className="section-4">
      <div className="container section-4__container">
      <h5 className="h4-title">How it works</h5>
       <ul className="top-list">
         <li className="top-item">
            <img src={one} alt=""/>
            <h3 className="top-h3">Pick your coffee</h3>
            <p>Select from our evolving range of artisan</p>
         <p>coffees. Our beans are ethically sourced</p>
         <p>and we pay fair prices for them. There are </p>
         <p>new coffees in all profiles every month</p>
         <p>for you to try out.</p>
         </li>
         <li className="top-item-2">
            <img src={two} alt=""/>
            <h3 className="top-h3">Choose the</h3>
            <h3 className="top-h3">frequency</h3>
            <p>Customize your order frequency,</p>
         <p>quantity, even your roast style and grind</p>
         <p>type. Pause, skip or cancel your</p>
         <p>subscription with no commitment</p>
         <p>through our online portal.</p>
         </li>
         <li className="top-item-2">
            <img src={three} alt=""/>
            <h3 className="top-h3">Receive and</h3>
            <h3 className="top-h3">enjoy!</h3>
            <p>We ship your package within 48 hours,</p>
            <p>freshly roasted. Sit back and enjoy</p>
            <p>award-winning world-class coffees</p>
            <p>curated to provide a distinct tasting</p>
            <p>experience.</p>
         </li>
       </ul>
       <button className="button-2">
       Create yout plan
     </button>
      </div>
       
     </section>
 </main>
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
    </>
  )
}


ReactDOM.render(React.createElement(App), document.getElementById("root"));

// finished