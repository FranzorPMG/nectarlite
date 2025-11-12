import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import discovery from '@/images/discovery.png'
import planning from '@/images/planning.png'
import execute from '@/images/execute.png'
import deliver from '@/images/deliver.png'

const AboutWorkingProcess = () => {
  return (
    <Wrapper className={'my-40 bg-white flex flex-col items-center gap-10'}>
        <div className="flex flex-col items-center gap-3">
            <div className="bg-[#b576b342] flex justify-center items-center text-purple-500 px-10 py-2 rounded-full">PROCESS</div>
            <h4 className='text-black font-bold text-4xl'>Our Working Process</h4>
        </div>
        <div className="grid md:grid-cols-4 grid-cols1 gap-5">
            <div className="flex flex-col gap-10 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[#b576b3] mix-blend-color"></div>
                <Image src={discovery} alt='discover' width={1000} height={1000} className='w-full' />
                <p className="text-center font-semibold text-2xl">Discovery</p>
            </div>
            <div className="flex flex-col gap-10 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[#b576b3] mix-blend-color"></div>
                <Image src={planning} alt='planning' width={1000} height={1000} className='w-full' />
                <p className="text-center font-semibold text-2xl">Planning</p> 
            </div>
            <div className="flex flex-col gap-10 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[#b576b3] mix-blend-color"></div>
                <Image src={execute} alt='execute' width={1000} height={1000} className='w-full' />
                <p className="text-center font-semibold text-2xl">Execution</p>
            </div>
            <div className="flex flex-col gap-10 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[#b576b3] mix-blend-color"></div>
                <Image src={deliver} alt='deliver' width={1000} height={1000} className='w-full' />
                <p className="text-center font-semibold text-2xl">Delivery</p>
            </div>
        </div>
    </Wrapper>
  )
}

export default AboutWorkingProcess