import React from 'react'
import Image from 'next/image'
import strategyImage from '@/images/strategyImage.png'
import designImage from '@/images/designImage.png'
import analyticImage from '@/images/analyticImage.png'
import productImage from '@/images/productImage.png'
import innovativeImage from '@/images/innovativeImage.png'
import platformImage from '@/images/platformImage.png'

const Carousel = () => {
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
  return (
    <div className='flex md:gap-10 gap-6 my-5'>
        {carouselData.map((carousel, index) => (
            <div key={index} className='flex-shrink-0 md:w-[32%] w-full md:-translate-x-2 flex items-center flex-col'>
                <Image src={carousel.image} width={1000} height={1000} alt={carousel.title} className='w-full rounded-md' />
                <div className="bg-white p-5 w-[80%] rounded-md flex flex-col gap-3 shadow-lg -translate-y-15 justify-center items-center">
                    <p className='text-2xl font-semibold text-black'>{carousel.title}</p>
                    <span className='text-purple-500'>{carousel.subtitle}</span>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Carousel