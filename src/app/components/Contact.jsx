import React, { useRef } from 'react'
import Image from 'next/image'
import Wrapper from './Wrapper'
import dottedBackground from '@/images/dottedBackground.png'
import contactImage from '@/images/contactImage.png'
import { Phone } from 'lucide-react'
import Button from './Button'
import reactionBackground from '@/images/reactionBackground.png'
import CountUp from 'react-countup'
import { useInView } from 'framer-motion'

const Contact = () => {
    const counterRef = useRef()

    const isInView = useInView(counterRef, { once: false, amount: 0.5 })

    const reactionData = [
        {
            name: "Happy Clients",
            amount: 80
        },
        {
            name: "Companies",
            amount: 50
        },
        {
            name: "Projects Done",
            amount: 230
        }
    ]

  return (
    <Wrapper className={'bg-[#2f0e2d] relative'}>
        <div className="flex md:justify-end justify-center py-10 h-[40rem]">
            <Image src={dottedBackground} width={1000} height={1000} alt='dotted background' className='w-full h-full object-cover absolute left-0 top-0' />
            <Image src={contactImage} width={1000} height={1000} alt='contact image' className='absolute w-[40%] hidden md:block left-30 bottom-0' />
            <div className="md:w-1/2 flex justify-center items-center flex-col space-y-5">
                <div className="w-20 h-20 rounded-full p-3 bg-white flex justify-center items-center">
                    <Phone size={30} className='text-purple-500' />
                </div>
                <span className="text-xl text-white font-bold text-center">CALL US 24/7</span>
                <h5 className="text-5xl text-white font-bold text-center">(+123) 456-9989</h5>
                <p className="text-white font-semibold text-center text-lg">Have any idea or project for in your mind call us or schedule an appointment. Our representative will reply you shortly.</p>
                <Button text={"Let's Talk"} className={'rounded-3xl font-bold py-3 px-7'} />
            </div>
        </div>
        <div className="absolute md:-bottom-20 md:right-20 left-1/2 -translate-x-1/2 rounded-3xl shadow-lg bg-white p-10 flex justify-between items-center md:w-[40%] w-[98%]  -bottom-50" style={{
            backgroundImage: `url(${reactionBackground.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            {reactionData.map((reaction, index) => (
                <div ref={counterRef} key={index} className="flex flex-col space-y-1 items-center">
                    {reaction.amount === 80 ? (
                        <h6 className="md:text-5xl text-2xl font-extrabold text-[#2f0e2d]"><CountUp key={isInView ? 'in' : 'out'} end={reaction.amount} suffix='k' /></h6>
                    ) : (
                        <h6 className="md:text-5xl text-2xl font-extrabold text-[#2f0e2d]"><CountUp key={isInView ? 'in' : 'out'} end={reaction.amount} suffix='+' /></h6>  
                    )}
                    <p className="font-semibold text-[#333333]">{reaction.name}</p>
                </div>
            ))}
        </div>
    </Wrapper>
  )
}

export default Contact