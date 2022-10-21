import React, { useState } from 'react';
import './Tab.css';

function Tab() {

    const [phone, setPhone] = useState(1)

    function fetchPhone(index) {
        setPhone(index);
    }
    return (
        <div>
            <h1>Phones</h1>
           <div className="tab-container">
               <div className='tab-con'>
                <div className="tab-title">
                    <div className="tab" onClick={() => fetchPhone(1)}>Apple</div>
                    <div className="tab" onClick={() => fetchPhone(2)}>Samsung</div>
                    <div className="tab" onClick={() => fetchPhone(3)}>Readme</div>
                </div>
                <div className="tab-content">
                    <div className={phone === 1 ? "content-active" : "content"}>Apple is the most expensive phone in the world</div>
                    <div className={phone === 2 ? "content-active" : "content"}>Samsung is the most popular phone and everyone likes it</div>
                    <div className={phone === 3 ? "content-active" : "content"}>Readme is the cheapest phone and more comfortable to use</div>
                </div>

               </div>

           </div>
        </div>
    )
}

export default Tab;