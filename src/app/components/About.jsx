import React from 'react'
import Image from 'next/image'
import Wrapper from './Wrapper'
import aboutImage1 from '@/images/aboutImage1.png'
import aboutImage2 from '@/images/aboutImage2.png'
import aboutImage3 from '@/images/aboutImage3.png'
import Button from './Button'

const About = () => {
    const technologies = [
        {
            name: "Software Development",
            skillAmount: 92
        },
        {
            name: "Cyber Security",
            skillAmount: 80
        },
        {
            name: "Artificial Intelligence",
            skillAmount: 95
        },
        {
            name: "Web Development",
            skillAmount: 78
        }
    ]
  return (
    <Wrapper className={'grid md:grid-cols-2 grid-cols-1 my-40'}>
        <div className="relative flex justify-center items-center">
            <Image src={aboutImage1} width={1000} height={1000} alt='about image 1' className='md:w-[70%] relative z-10' />
            <Image src={aboutImage2} width={1000} height={1000} alt='about image 2' className='md:w-[40%] w-[70%] absolute md:-left-20 -left-10 md:-top-1 -top-20' />
            <Image src={aboutImage3} width={1000} height={1000} alt='about image 3' className='md:w-[60%] w-[80%] absolute md:-bottom-20 -bottom-20 md:-left-18' />
        </div>
        <div className="flex md:mt-0 flex-col space-y-5 mt-20 items-start">
            <div className="flex space-x-8 items-center">
                <div className="flex gap-3">
                    <div className="w-4 h-1 bg-blue-900"></div>
                    <div className="w-10 h-1 bg-blue-900"></div>
                </div>
                <p className="text-blue-900 font-light text-sm">ABOUT US</p>
            </div>
            <h2 className="font-bold text-black text-4xl leading-12">
                We Are Increasing Business Success With Technology
            </h2>
            <p className="text-[#454545] text-lg">Over 25 years working in IT services developing software applications and mobile apps for clients all over the world.</p>
            <div className="flex flex-col space-y-5 w-full items-start">
                {technologies.map((technology, index) => (    
                    <div key={index} className="flex w-full flex-col space-y-3">
                        <div className="flex justify-between">
                            <p className="text-sm">{technology.name}</p>
                            <p className='font-bold'>{technology.skillAmount}%</p>
                        </div>
                        <div className="w-full rounded-sm overflow-hidden bg-[#dfedfe]">
                            <div style={{
                                backgroundImage: 'linear-gradient(to right, rgba(45, 112, 238, 1), rgba(37, 99, 235, 1))',
                                width: `${technology.skillAmount}%`,
                                height: '7px',
                                backgroundSize: '15px 15px', 
                            }}></div>
                        </div>
                    </div>
                ))}
                <Button text={'Learn More'} className={'rounded-4xl px-10 font-semibold py-4 my-5'} />
            </div>
        </div>
    </Wrapper>
  )
}

export default About