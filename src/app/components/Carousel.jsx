'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import strategyImage from '@/images/strategyImage.png'
import designImage from '@/images/designImage.png'
import analyticImage from '@/images/analyticImage.png'
import productImage from '@/images/productImage.png'
import innovativeImage from '@/images/innovativeImage.png'
import platformImage from '@/images/platformImage.png'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Carousel = () => {
    const carouselRef = useRef()
    const [count, setCount] = useState(0);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const [carouselGap, setCarouselGap] = useState(0);
    const carouselData = [
        {
            title: "Product Engineering",
            subtitle: "IT Technology", 
            image: productImage
        },
        {
            title: "Analytic Solutions",
            subtitle: "IT Technology", 
            image: analyticImage
        },
        {
            title: "Product Design",
            subtitle: "IT Technology", 
            image: designImage
        },
        {
            title: "Growth Strategies",
            subtitle: "IT Technology", 
            image: strategyImage
        },
        {
            title: "Platform Integration",
            subtitle: "IT Technology", 
            image: platformImage
        },
        {
            title: "Innovative Interfaces",
            subtitle: "IT Technology", 
            image: innovativeImage
        },
        {
            title: "Product Engineering",
            subtitle: "IT Technology", 
            image: productImage
        },
        {
            title: "Analytic Solutions",
            subtitle: "IT Technology", 
            image: analyticImage
        },
        {
            title: "Product Design",
            subtitle: "IT Technology", 
            image: designImage
        },
    ]

    const isDragging = useRef(false);
    const startX = useRef(0);
    const dragConstraints = useState({ left: 0, right: 0 })

    useEffect(() => {
        if (carouselRef.current) {
            const width = carouselRef.current.getBoundingClientRect().width; 
            setCarouselWidth(width)
            const gap = window.getComputedStyle(carouselRef.current.parentElement).columnGap;
            setCarouselGap(parseInt(gap))
        }
    }, []);
    useEffect(() => {
        if(!carouselRef.current) return;
        if(count >= carouselData.length - 1){
            const button = document.querySelector('.right-hide');
            button.style.display = 'none'
        } else if(count <= 0){
            const button = document.querySelector('.left-hide');
            button.style.display = 'none'
        } else{
            const rightButton = document.querySelector('.right-hide');
            const leftButton = document.querySelector('.left-hide');
            rightButton.style.display = 'flex'
            leftButton.style.display = 'flex'
        }
    }, [count, carouselData.length]);
    return (
        <div className='relative group'>
        <motion.div className='flex md:gap-10 gap-6 my-5' 
            drag="x"
            dragConstraints={dragConstraints}
            
            animate={{ x: -((carouselWidth + carouselGap) * count)}}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 15,
                mass: 1
            }}
        >
            {carouselData.map((carousel, index) => {
                if(index === 0) { 
                    return <div ref={carouselRef} key={index} className='flex-shrink-0 md:w-[32%] w-full md:-translate-x-2 flex items-center flex-col relative'>
                        <Image src={carousel.image} width={1000} height={1000} alt={carousel.title} className='w-full rounded-md' />
                        <div className="bg-white p-5 w-[80%] rounded-md flex flex-col gap-3 shadow-lg -translate-y-15 justify-center items-center">
                            <p className='text-2xl font-semibold text-black'>{carousel.title}</p>
                            <span className='text-purple-500'>{carousel.subtitle}</span>
                        </div>
                    </div>
                } else {
                    return <div key={index} className='flex-shrink-0 md:w-[32%] w-full md:-translate-x-2 flex items-center flex-col relative'>
                        <Image src={carousel.image} width={1000} height={1000} alt={carousel.title} className='w-full rounded-md' />
                        <div className="bg-white p-5 w-[80%] rounded-md flex flex-col gap-3 shadow-lg -translate-y-15 justify-center items-center">
                            <p className='text-2xl font-semibold text-black'>{carousel.title}</p>
                            <span className='text-purple-500'>{carousel.subtitle}</span>
                        </div>
                    </div>
                }               
            })}
        </motion.div>
        <div onClick={() => setCount(count + 1)} className="absolute right-hide -right-10 md:opacity-0 cursor-pointer md:group-hover:-right-15 group-hover:opacity-100 transition-all duration-500 ease-in-out top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex justify-center items-center">
            <ArrowRight size={30} strokeWidth={1} />
        </div>
        <div onClick={() => setCount(count - 1)} className="absolute left-hide -left-10 md:opacity-0 cursor-pointer md:group-hover:-left-15 group-hover:opacity-100 transition-all duration-500 ease-in-out top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex justify-center items-center">
            <ArrowLeft size={30} strokeWidth={1} />
        </div>
    </div>
  )
}

export default Carousel