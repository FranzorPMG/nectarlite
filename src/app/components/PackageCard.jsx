import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { Icon } from 'lucide-react'
import IconComponent from './IconComponent'

const PackageCard = ({className, index, type, src, amount, duration, packageFunctionProp}) => {
  return (
    <div className={`${className} ${index === 1 ? 'bg-gradient-to-l from-blue-900 to-blue-500' : 'bg-white shadow-xl'} p-10 rounded-xl relative flex flex-col space-y-10 items-start`}>
        <div className={`${index === 1 ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'} p-2 rounded-r-2xl absolute left-0 top-20 px-5`}>{type}</div>
        <Image src={src} width={1000} height={1000} alt={type} className='w-20 mx-auto' />
        <div className="flex flex-col space-y-5 items-center w-full">
            <div className="flex flex-col space-y-3 items-center">
                <h6 className={`font-bold text-5xl ${index === 1 ? 'text-white' : 'text-black'}`}><sub>$</sub>{amount}</h6>
                <p className={`${index === 1 ? 'text-[#a9d9f6]' : 'text-[#7d8b92]'} font-semibold`}>{duration}</p>
            </div>
            <div className={`${index === 1 ? 'bg-gradient-to-r from-[##ebebeb] to-[#a9d9f6] text-transparent' : 'bg-[#ebebeb]'} w-full h-[0.5px]`} />
            {packageFunctionProp.map((functionProp, num) => (
                <div key={num} className="flex justify-between items-center w-full">
                    <p className={`${index === 1 ? 'text-white' : 'text-black'}`}>{functionProp.title}</p>
                    <IconComponent checkIcon={functionProp.checkIcon} index={index} />
                </div>
            ))}
            <Button text={'BUY NOW'} className={'text-white px-10 py-4 rounded-3xl absolute -bottom-5'} />
        </div>
    </div>
  )
}

export default PackageCard