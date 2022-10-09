import React from 'react'

import Coffee from "../../../images/Coffee.png"

const Section2 = () => {
  return (
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
  )
}

export default Section2