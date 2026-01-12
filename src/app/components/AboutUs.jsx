import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import aboutIncreaseImage from '@/images/aboutIncreaseImage.png'
import aboutImageEffect from '@/images/aboutImageEffect.png'
import aboutImageEffect1 from '@/images/aboutImageEffect1.png'
import Button from './Button'

const AboutUs = () => {
  return (
    <Wrapper className={'grid md:grid-cols-2 grid-cols-1 md:gap-20 my-20 gap-10'}>
        <div className="flex justify-center items-center relative">
            <Image src={aboutIncreaseImage} width={1000} height={1000} alt='about increase image' className='md:w-full w-1/2 rounded-full relative z-1' />
            <Image src={aboutImageEffect} width={1000} height={1000} alt='about effect image' className='md:w-[70%] w-[35%] absolute md:left-0 md:top-0' />
            <Image src={aboutImageEffect1} width={1000} height={1000} alt='about effect image' className='w-20 absolute md:right-0 md:bottom-0 -bottom-5 right-30' />
        </div>
        <div className="flex flex-col gap-5 items-start">
            <div className="text-purple-500 font-light bg-[#b576b342] rounded-full px-5 py-2">
                ABOUT US
            </div>
            <h2 className='text-4xl font-bold text-black'>We Are Increasing Business Success With Technology</h2>
            <p className='text-[#c3c3c3]'>Nectarlite Technology is a technology-driven company focused on building practical, reliable, and accessible digital solutions that bring essential services directly to people’s doorsteps.</p>
            <p className='text-[#c3c3c3]'>Through its growing ecosystem of mobile applications and platforms, Nectarlite aims to simplify everyday life by connecting users to transportation, food, and future on-demand services with speed, efficiency, and trust.</p>
            <Button text={'Learn More'} className={'px-10 py-3 rounded-full'} />
        </div>
    </Wrapper>
  )
}

export default AboutUs