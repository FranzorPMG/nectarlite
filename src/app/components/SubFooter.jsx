import React from 'react'
import Wrapper from './Wrapper'
import lab from "@/images/lab.png"
import codeless from "@/images/codeless.png"
import coretechnology from "@/images/coretechnology.png"
import techhub from "@/images/techhub.png"
import greenlab from "@/images/greenlab.png"
import Image from 'next/image'

const SubFooter = () => {
  return (
    <Wrapper className={'bg-[#2f0e2d] py-20 flex gap-10 items-center justify-between'}>
        <div className="flex gap-5 flex-shrink-0 items-center">
            <Image src={lab} width={1000} height={1000} alt='Slab technology' className='w-50 saturate-0 brightness-120' />
        </div>
        <div className="flex gap-5 flex-shrink-0 items-center">
            <Image src={codeless} width={1000} height={1000} alt='Slab technology' className='w-50 saturate-0 brightness-120' />
        </div>
        <div className="flex gap-5 flex-shrink-0 items-center">
            <Image src={coretechnology} width={1000} height={1000} alt='Slab technology' className='w-50 saturate-0 brightness-120' />
        </div>
        <div className="flex gap-5 flex-shrink-0 items-center">
            <Image src={techhub} width={1000} height={1000} alt='Slab technology' className='w-50 saturate-0 brightness-120' />
        </div>
        <div className="flex gap-5 flex-shrink-0 items-center">
            <Image src={greenlab} width={1000} height={1000} alt='Slab technology' className='w-50 saturate-0 brightness-120' />
        </div>
    </Wrapper> 
  )
}

export default SubFooter