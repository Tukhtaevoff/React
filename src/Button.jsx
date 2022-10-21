import React from 'react'

const Button = ({setMoreText, moreText}) => {
  return (
    <button className='button' onClick={() => setMoreText(!moreText)}>
        {moreText ? "-" : "+"}
    </button>
  )
}

export default Button