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
import { motion, useMotionValue } from 'framer-motion'

const Carousel = () => {
    // ... (refs and data array remain the same)
    const carouselRef = useRef(null); // Use null for consistency
    const viewportRef = useRef(null); // Need a viewport ref for proper constraints
    const [count, setCount] = useState(0);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const [carouselGap, setCarouselGap] = useState(0);
    const carouselData = [
       // ... your carousel data
        {
            title: "Product Engineering", subtitle: "IT Technology", image: productImage
        },
        {
            title: "Analytic Solutions", subtitle: "IT Technology", image: analyticImage
        },
        {
            title: "Product Design", subtitle: "IT Technology", image: designImage
        },
        {
            title: "Growth Strategies", subtitle: "IT Technology", image: strategyImage
        },
        {
            title: "Platform Integration", subtitle: "IT Technology", image: platformImage
        },
        {
            title: "Innovative Interfaces", subtitle: "IT Technology", image: innovativeImage
        },
        {
            title: "Product Engineering", subtitle: "IT Technology", image: productImage
        },
        {
            title: "Analytic Solutions", subtitle: "IT Technology", image: analyticImage
        },
        {
            title: "Product Design", subtitle: "IT Technology", image: designImage
        },
    ]

    const dragThreshold = 50;

    // Use useMotionValue to manage the x position during and after drag
    const dragX = useMotionValue(0);

    const snapToItem = useCallback((targetCount) => {
        const newX = -((carouselWidth + carouselGap) * targetCount);
        
        // Use the motion value's built-in animation method to snap smoothly
        dragX.set(newX, {
            type: 'spring',
            stiffness: 300,
            damping: 25, // Slightly higher damping makes it less bouncy
            mass: 0.8
        });
    }, [carouselWidth, carouselGap, dragX]);

    const handleDragEnd = useCallback(() => {
        const x = dragX.get();
        // if(count === carouselData.length - 1) {
        //     return
        // } else if(count <= 0) {
        //     return
        // }

        if(x <= -dragThreshold && count < carouselData.length - 1){
            setCount(prev => prev + 1);
        } else if(x >= dragThreshold && count > 0){
            setCount(prev => prev - 1);
        } else{
            return
        }
    }, [count, carouselData.length, snapToItem]);


    useEffect(() => {
        if (carouselRef.current && viewportRef.current) {
            const width = carouselRef.current.getBoundingClientRect().width; 
            setCarouselWidth(width);

            // Get gap using the viewportRef's computed style (it's the parent of the flex container)
            const gap = window.getComputedStyle(viewportRef.current.firstChild).columnGap;
            setCarouselGap(parseInt(gap));

            // Set the initial position correctly when components mount/resize
            snapToItem(count);
        }
    }, [count, snapToItem]);


    // Effect to handle button visibility (can stay largely the same)
    useEffect(() => {
        // ... (your existing button logic, slightly refactored for clarity)
        const rightButton = document.querySelector('.right-hide');
        const leftButton = document.querySelector('.left-hide');

        if (count >= carouselData.length - 1){
            if (rightButton) rightButton.style.display = 'none';
            if (leftButton) leftButton.style.display = 'flex'; // Ensure the other one is visible
        } else if (count <= 0){
            if (leftButton) leftButton.style.display = 'none';
            if (rightButton) rightButton.style.display = 'flex'; // Ensure the other one is visible
        } else {
            if (rightButton) rightButton.style.display = 'flex';
            if (leftButton) leftButton.style.display = 'flex';
        }
    }, [count, carouselData.length]);


    return (
        <div className='relative group'>
            {/* Viewport container needed to contain overflow */}
            <div ref={viewportRef} className="overflow-hidden"> 
                <motion.div 
                    className='flex md:gap-10 gap-6 my-5' 
                    drag="x"
                    // Constraints must be calculated based on total width vs viewport width
                    // We can skip explicit constraints if we handle snapping onDragEnd correctly
                    // or calculate them dynamically in the useEffect hook.
                    dragConstraints={{
                        left: 0,
                        right: 0
                    }}
                    // Connect dragX motion value to the x style
                    style={{ x: dragX }}

                    animate={{
                        translateX: -((carouselWidth + carouselGap) * count)
                    }}
                    
                    // REMOVE: We no longer use the 'animate' prop here. The motion value handles position.
                    // animate={{ x: -((carouselWidth + carouselGap) * count)}} 

                    transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 15,
                        mass: 1
                    }}
                    onDragEnd={handleDragEnd} // Use the consolidated handler
                    whileTap={{ cursor: "grabbing" }}
                >
                    {carouselData.map((carousel, index) => (
                        <div 
                            // Use the first item ref within the map, it still works fine
                            ref={index === 0 ? carouselRef : null} 
                            key={index} 
                            className='flex-shrink-0 md:w-[32%] w-full flex items-center flex-col relative'
                        >
                            <Image 
                                src={carousel.image} 
                                width={1000} 
                                height={1000} 
                                alt={carousel.title} 
                                className='w-full rounded-md' 
                                draggable={false} // Prevents ghost image issue
                            />
                            <div className="bg-white p-5 w-[80%] rounded-md flex flex-col gap-3 shadow-lg translate-y-[-7.5rem] justify-center items-center">
                                <p className='text-2xl font-semibold text-black'>{carousel.title}</p>
                                <span className='text-purple-500'>{carousel.subtitle}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Carousel
