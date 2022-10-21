import { useState } from 'react'
import './App.css'
import Button from './Button';
import Text from './Text';

function App() {
  const [moreText, setMoreText] = useState(false)

  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eligendi exercitationem et laborum incidunt recusandae fugiat nulla, velit officiis voluptas voluptates iusto eveniet harum nostrum a quo perferendis, inventore officia?";

  return (
    <div className="app">
       <div className='container'>
          <ul className='list'>
            <li>
              <div className='list__item'>
              <h2>Just drop this down</h2>
              <Button setMoreText={setMoreText} moreText={moreText} />
              </div>
              <Text text={text} moreText={moreText} />
            </li>
            
          </ul>
       </div>
    </div>
  )
}

export default App
