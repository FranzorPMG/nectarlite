import React from 'react'
import Wrapper from './Wrapper'
import Card from './Card'
import techImage from '@/images/techImage.png'
import necessityImage from '@/images/necessityImage.png'
import servoImage from '@/images/servoImage.png'
import AnimatedSlide from './AnimatedSlide'
import TestimonialCard from './TestimonialCard'
import BlogCard from './BlogCard'

const Blog = () => {
    const cardDetails = [
        {
            title: 'Servo Project Joins the Linus Foundation Fold Desco',
            services: 'IT Services',
            desc: 'We denounce with righteoous indige nation and dislike men who are so biguiled',
            date: "16 Nov 2020",
            admin: "admin",
            image: servoImage
        },
        {
            title: 'Servo Project Joins the Linus Foundation Fold Desco',
            services: 'Software Development',
            desc: 'We denounce with righteoous indige nation and dislike men who are so biguiled',
            date: "16 Nov 2020",
            admin: "admin",
            image: necessityImage
        },
        {
            title: 'Servo Project Joins the Linus Foundation Fold Desco',
            services: 'Web Development',
            desc: 'We denounce with righteoous indige nation and dislike men who are so biguiled',
            date: "16 Nov 2020",
            admin: "admin",
            image: techImage
        },
    ]
  return (
    <Wrapper className={'py-30 bg-white'}>
        <div className="flex flex-col space-y-3 items-center">
            <p className="text-purple-900 font-light">Blog</p>
            <h3 className='text-4xl text-center font-bold'>Read Our Latest Tips & Tricks</h3>
            <AnimatedSlide />
        </div>
        <div className="flex md:flex-row flex-col gap-10 my-5">
            {cardDetails.map((card, index) => (
                <BlogCard key={index} src={card.image} desc={card.desc} services={card.services} name={card.title} title={card.title} date={card.date} admin={card.admin} />
            ))}
        </div>
    </Wrapper>
  )
}

export default Blog