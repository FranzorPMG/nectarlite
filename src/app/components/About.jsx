'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import Wrapper from './Wrapper'
import aboutImage1 from '@/images/aboutImage1.png'
import aboutImage2 from '@/images/aboutImage2.png'
import aboutImage3 from '@/images/aboutImage3.png'
import Button from './Button'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const counterRef = useRef();
    const isInView = useInView(counterRef, { once: false, amount: 0.5 })
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

    useGSAP(() => {
        gsap.to('.animate-image', {
            translateY: 0,
            translateX: 0,
            opacity: 1,
            duration: 5, 
            ease: 'power4.out',
            stagger: 0.5,
            scrollTrigger: {
                trigger: '.animate-container',
                start: 'top center',
                end: 'bottom 20%',
            }
        })
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
    })
  return (
    <Wrapper className={'grid md:grid-cols-2 grid-cols-1 my-40'}>
        <div className="relative animate-container flex justify-center items-center">
            <Image src={aboutImage1} width={1000} height={1000} alt='about image 1' className='md:w-[70%] relative z-1' />
            <Image src={aboutImage2} width={1000} height={1000} alt='about image 2' className='md:w-[40%] w-[70%] absolute md:-left-20 -left-10 md:-top-1 -top-20 -translate-y-200 translate-x-200 opacity-0 animate-image' />
            <Image src={aboutImage3} width={1000} height={1000} alt='about image 3' className='md:w-[60%] w-[80%] absolute md:-bottom-10 -bottom-20 md:-left-18 -translate-y-250 translate-x-200 opacity-0 animate-image' />
        </div>
        <div className="flex md:mt-0 flex-col space-y-5 mt-20 items-start">
            <div className="flex space-x-8 items-center">
                <div className="flex gap-3">
                    <div className="w-4 h-1 bg-purple-900"></div>
                    <div className="w-10 h-1 bg-purple-900"></div>
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
                            <p ref={counterRef} className='font-bold'>
                                <CountUp start={0} key={isInView ? 'in' : 'out'} suffix='%' end={technology.skillAmount} duration={2.5} />
                            </p>
                        </div>
                        <div className="w-full rounded-sm overflow-hidden" style={{
                            backgroundColor: 'rgb(108,33,166, 0.3)',
                        }}>
                            <motion.div style={{
                                backgroundImage: 'linear-gradient(to right, rgb(95,26,147), rgb(108,33,166))',
                                width: `${technology.skillAmount}%`,
                                height: '7px',
                                backgroundSize: '15px 15px', 
                            }}
                                initial={{
                                    width: 0,
                                }}
                                whileInView={{
                                    width: `${technology.skillAmount}%`, 
                                    transition: {
                                        duration: 1.5, 
                                        ease: 'easeInOut',
                                    }
                                }}
                            ></motion.div>
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