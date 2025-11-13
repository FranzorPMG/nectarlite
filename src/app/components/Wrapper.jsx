'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Wrapper = ({children, className}) => {
  return (
    <motion.div 
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1, 
        transition:{
          duration: 0.8,
          ease: 'easeInOut'
        }
      }}
    className={`md:px-15 px-5 ${className}`}>{children}</motion.div>
  )
}

export default Wrapper