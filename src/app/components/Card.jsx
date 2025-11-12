import React from 'react'
import Image from 'next/image'

const Card = ({src, name, title, desc}) => {
  return (
    <div className='flex flex-col space-y-5 bg-white rounded-xl p-5'>
        <div className="flex relative items-center">
          <Image src={src} alt={name} width={1000} height={1000} className='w-20' />
          <div className="w-full h-full bg-purple-900 absolute mix-blend-color left-0 top-0"></div>
        </div>
        <h4 className='text-2xl font-bold text-black'>{title}</h4>
        <div className="font-light">{desc}</div>
    </div>
  )
}

export default Card