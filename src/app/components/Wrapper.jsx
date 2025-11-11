import React from 'react'

const Wrapper = ({children, className}) => {
  return (
    <div className={`md:px-15 px-5 ${className}`}>{children}</div>
  )
}

export default Wrapper