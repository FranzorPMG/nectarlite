import React from 'react'
import Image from 'next/image'
import projectsBackground from '@/images/projectsBackground.png'
import Wrapper from './Wrapper'
import Carousel from './Carousel'

const Projects = () => {
  return (
    <Wrapper className={'relative h-[30rem] py-20 bg-[#000060]'}>
        <Image src={projectsBackground} width={1000} height={1000} alt='product background' className='w-full h-full absolute top-0 left-0' />

        <p className="font-light text-white text-center">PROJECTS</p>
        <h6 className="text-3xl text-center font-bold text-white">Our Recent Launched Projects <br /> Available in the Market</h6>
        <Carousel />
    </Wrapper>
  )
}

export default Projects