import React from 'react'
import Wrapper from './Wrapper'
import Card from './Card'
import quoteIcon from '@/images/quoteIcon.png'
import jorina from '@/images/jorina.png'
import richard from '@/images/richard.png'
import mike from '@/images/mike.png'
import monty from '@/images/monty.png'
import rashid from '@/images/rashid.png'
import AnimatedSlide from './AnimatedSlide'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
    const cardDetails = [
        {
            name: 'Abdur Rashid',
            title: 'CEO, Keen IT Solution',
            desc: 'Capitalize on low handing fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
            quote: quoteIcon,
            image: rashid
        },
        {
            name: 'Monty Moni',
            title: 'CEO, Keen IT Solution',
            desc: 'Capitalize on low handing fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
            quote: quoteIcon,
            image: monty
        },
        {
            name: 'Mike Hotten',
            title: 'CEO, Brick Solution',
            desc: 'Capitalize on low handing fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
            quote: quoteIcon,
            image: mike
        },
        {
            name: 'John Richard',
            title: 'CEO, Brick Solution',
            desc: 'Capitalize on low handing fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
            quote: quoteIcon,
            image: richard
        },
        {
            name: 'Jorina Bibi',
            title: 'CEO, Brick Consulting',
            desc: 'Capitalize on low handing fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
            quote: quoteIcon,
            image: jorina
        },
    ]
  return (
    <Wrapper className={'py-30 pb-50 bg-[#f6f7f9]'}>
        <div className="flex flex-col space-y-3 items-center">
            <p className="text-purple-900 font-light">Testimonials</p>
            <h3 className='text-4xl text-center font-bold'>What Saying Our Customers</h3>
            <AnimatedSlide />
        </div>
        <div className="flex gap-10 my-5">
            {cardDetails.map((card, index) => (
                <TestimonialCard key={index} src={card.image} desc={card.desc} name={card.title} title={card.title} quote={card.quote} />
            ))}
        </div>
    </Wrapper>
  )
}

export default Testimonials