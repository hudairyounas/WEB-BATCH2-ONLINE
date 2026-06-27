import React from 'react'

const Button = ({btnText, h1Tag}) => {
  return (
    <>
    <button>{btnText}</button>
    <h1>{h1Tag}</h1>
    </>
  )
}

export default Button