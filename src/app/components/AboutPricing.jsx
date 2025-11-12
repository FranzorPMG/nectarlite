import React from 'react'
import Wrapper from './Wrapper'
import AnimatedSlide from './AnimatedSlide'
import platinumPackage from '@/images/platinumPackage.png'
import goldPackage from '@/images/goldPackage.png'
import silverPackage from '@/images/silverPackage.png'
import { CheckIcon, ClosedCaption } from 'lucide-react'
import PackageCard from './PackageCard'

const AboutPricing = () => {
    const packagesData = [
        {
            packageType: "SILVER",
            image: silverPackage, 
            amount: 29.99,
            packageDuration: "Montly Package",
            packageFunctions: [
                {
                    title: "Powerful Admin Panel", 
                    checkIcon: 'checked',
                },
                {
                    title: "1 Native Android App", 
                    checkIcon: 'checked',
                },
                {
                    title: "Multi-Language Support", 
                    checkIcon: 'close',
                },
                {
                    title: "Support via E-mail and Phone", 
                    checkIcon: 'checked',
                },
            ]
        },
        {
            packageType: "GOLD",
            image: goldPackage, 
            amount: 39.99,
            packageDuration: "Montly Package",
            packageFunctions: [
                {
                    title: "Powerful Admin Panel", 
                    checkIcon: 'checked',
                },
                {
                    title: "2 Native Android App", 
                    checkIcon: 'checked',
                },
                {
                    title: "Multi-Language Support", 
                    checkIcon: 'checked',
                },
                {
                    title: "Support via E-mail and Phone", 
                    checkIcon: 'checked',
                },
            ]
        },
        {
            packageType: "PLATINUM",
            image: platinumPackage, 
            amount: 79.99,
            packageDuration: "Montly Package",
            packageFunctions: [
                {
                    title: "Powerful Admin Panel", 
                    checkIcon: 'checked',
                },
                {
                    title: "3 Native Android App", 
                    checkIcon: 'checked',
                },
                {
                    title: "Multi-Language Support", 
                    checkIcon: 'checked',
                },
                {
                    title: "Support via E-mail and Phone", 
                    checkIcon: 'checked',
                },
            ]
        },
    ]
  return (
    <Wrapper className={'mt-40 py-40 bg-[#f5f6f9]'}>
        <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center gap-3">
                <span className="text-sm font-light text-blue-900">PRICING</span>
                <p className="font-bold text-4xl">Our Pricing Plan</p>
                <AnimatedSlide />
            </div>
            <div className="grid md:grid-cols-3 gap-10 grid-cols-1">
                {packagesData.map((packages, index) => (
                    <PackageCard key={index} type={packages.packageType} src={packages.image} amount={packages.amount} duration={packages.packageDuration} packageFunctionProp={packages.packageFunctions} index={index} />
                ))}
            </div>
        </div>
    </Wrapper>
  )
}

export default AboutPricing