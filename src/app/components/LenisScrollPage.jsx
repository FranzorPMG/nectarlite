'use client'
import React, {useEffect} from 'react'
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Contact from "@/app/components/Contact";
import WorkingProcess from "@/app/components/WorkingProcess";
import Projects from "@/app/components/Projects";
import Pricing from "@/app/components/Pricing";
import Testimonials from "@/app/components/Testimonials";
import Blog from "@/app/components/Blog";
import SubFooter from "@/app/components/SubFooter";
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
const gsapTicker = gsap.ticker;

const LenisScrollPage = () => {
    useEffect(() => {
        // 1. Initialize Lenis instance
        const lenis = new Lenis({ 
            lerp: 0.1, // Smoothness factor
            duration: 1.2, // Scroll duration
            wheelMultiplier: 0.7, // Sensitivity
        });

        // 2. Synchronize Lenis scrolling with ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);
        
        // 3. Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
        // The callback receives time in seconds from GSAP, so we multiply by 1000
        // to pass milliseconds to lenis.raf().
        const tickerCallback = (time) => {
            lenis.raf(time * 1000); 
        };

        gsapTicker.add(tickerCallback);

        // 4. Optional: Disable GSAP lag smoothing
        gsapTicker.lagSmoothing(0);

        // 5. Cleanup function
        return () => {
            // Destroy Lenis instance
            lenis.destroy();
            
            // Remove the RAF listener from GSAP's ticker
            gsapTicker.remove(tickerCallback);
            
            // Re-enable lag smoothing if it was globally disabled (optional)
            gsapTicker.lagSmoothing(1); 
        };
    }, []);
  return (
    <>
        <Hero />
        <About />
        <Services />
        <Contact />
        <WorkingProcess />
        {/* <Projects /> */}
        {/* <Pricing /> */}
        {/* <Testimonials /> */}
        {/* <Blog /> */}
        {/* <SubFooter /> */}
    </>
  )
}

export default LenisScrollPage