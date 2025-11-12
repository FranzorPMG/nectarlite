import React from 'react'
import aboutBackground from '@/images/aboutBackground.png'
import Wrapper from './Wrapper'
import Link from 'next/link'

const AboutHero = () => {
  return (
    <div className='h-[25rem] flex justify-center items-center flex-col gap-3' style={{
        backgroundImage: `url(${aboutBackground.src})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
    }}>
        <h1 className='text-5xl font-bold text-white'>About</h1>
        <div className="flex items-center gap-3 text-white font-light text-sm">
            <Link href="/">Home</Link>
            <span>/</span>
            <p>About</p>
        </div>
    </div>
  )
}

export default AboutHero