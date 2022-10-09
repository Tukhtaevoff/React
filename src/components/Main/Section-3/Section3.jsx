import React from 'react'

import coffeeBean from "../../../images/coffee-bean.svg"
import truck from "../../../images/truck.svg"
import gift from "../../../images/gift.svg"

const Section3 = () => {
  return (
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
  )
}

export default Section3