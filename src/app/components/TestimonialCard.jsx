import React from 'react'
import Image from 'next/image'

const TestimonialCard = ({quote, name, title, desc, src}) => {
  return (
    <div className='flex-shrink-0 md:w-[32%] w-full -translate-x-2 flex items-center flex-col bg-white rounded-xl p-10 space-y-5 h-[20rem]'>
        <Image src={quote} alt={name} width={1000} height={1000} className='w-10 mx-auto' />
        <div className="text-center">{desc}</div>
        <div className="flex flex-col space-y-5 items-center translate-y-5">
            <Image src={src} alt={name} width={1000} height={1000} className='w-20 rounded-full ' />
            <p className="font-semibold text-black text-2xl">{name}</p>
            <span className='text-[#686868]'>
                {title}
            </span>
        </div>
    </div>
  )
}

export default TestimonialCard