import React from 'react'

const Text = ({text, moreText}) => {
  return (
    <p>{moreText ? text : `${text.substring(0, 0)}`}</p>
  )
}

export default Text