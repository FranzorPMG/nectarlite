'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Card = ({src, name, title, desc}) => {
  return (
    <motion.div className='flex flex-col space-y-5 bg-white rounded-xl p-5' 
      initial={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      }}
      whileInView={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        transition: {
          duration: 0.8,
          ease: 'easeInOut'
        }
      }}
    >
        <div className="flex relative items-center">
          <Image src={src} alt={name} width={1000} height={1000} className='w-20' />
          <div className="w-full h-full bg-purple-900 absolute mix-blend-color left-0 top-0"></div>
        </div>
        <h4 className='text-2xl font-bold text-black'>{title}</h4>
        <div className="font-light">{desc}</div>
    </motion.div>
  )
}

export default Card