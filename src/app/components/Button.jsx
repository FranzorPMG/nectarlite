import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`bg-gradient-to-r from-blue-900 to-blue-500 text-white ${className}`}>{text}</button>
  )
}

export default Button