import React from 'react'
import Wrapper from './Wrapper'
import softwareDevelopment from '@/images/softwareDevelopment.png'
import webDevelopment from '@/images/webDevelopment.png'
import analyticSolutions from '@/images/analyticSolutions.png'
import cloud from '@/images/cloud.png'
import productDesign from '@/images/productDesign.png'
import dataCenter from '@/images/dataCenter.png'
import Card from './Card'
import AnimatedSlide from './AnimatedSlide'

const Services = () => {
    const cardDetails = [
        {
            title: 'Software Development',
            desc: 'We engineer custom software solutions to streamline your operations and drive growth. From initial concept and architecture design to flawless deployment, we build high-performance, scalable applications tailored precisely to your business needs.',
            image: softwareDevelopment
        },
        {
            title: 'Web Development',
            desc: 'Transform your online presence with stunning, responsive, and high-speed websites. We build modern front-ends and robust back-ends, focusing on exceptional user experience (UX) and optimized performance across all devices.',
            image: webDevelopment
        },
        {
            title: 'Analytic Solutions',
            desc: 'Unlock the power hidden in your data. We design and implement advanced business intelligence (BI) tools and dashboards that provide clear, actionable insights, turning raw data into strategic decisions and competitive advantage.',
            image: analyticSolutions
        },
        {
            title: 'Cloud & DevOps',
            desc: 'Accelerate your delivery cycle and enhance scalability through modern cloud infrastructure. We implement automated CI/CD pipelines, containerization (like Kubernetes), and robust security, ensuring reliable, cost-effective operations on AWS, Azure, or GCP.',
            image: cloud
        },
        {
            title: 'Product & Design',
            desc: 'We craft digital products that customers love. Our team specializes in user-centered design (UCD), creating intuitive interfaces (UI) and conducting rigorous testing to ensure your product is effective, engaging, and meets market demand.',
            image: productDesign
        },
        {
            title: 'Data Center',
            desc: 'Ensure maximum uptime and performance for your mission-critical infrastructure. We provide comprehensive data center planning, management, and virtualization services, offering high availability, redundancy, and simplified infrastructure maintenance.',
            image: dataCenter
        },
    ]
  return (
    <Wrapper className={'py-30 bg-[#f6f7f9]'}>
        <div className="flex flex-col space-y-3 items-center">
            <p className="text-purple-900 font-light">SERVICES</p>
            <h3 className='text-4xl text-center font-bold'>We Are Offering All Kinds of IT <br /> Solutions Services</h3>
            <AnimatedSlide />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 my-5">
            {cardDetails.map((card, index) => (
                <Card key={index} src={card.image} desc={card.desc} name={card.title} title={card.title} />
            ))}
        </div>
    </Wrapper>
  )
}

export default Services