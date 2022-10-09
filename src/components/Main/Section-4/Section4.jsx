import React from 'react'

import one from  "../../../images/01.svg"
import two from  "../../../images/02.svg"
import three from  "../../../images/03.svg"

const Section4 = () => {
  return (
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
  )
}

export default Section4