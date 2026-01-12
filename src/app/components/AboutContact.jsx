import React from 'react'
import Image from 'next/image'
import projectsBackground from '@/images/projectsBackground.png'
import Wrapper from './Wrapper'
import contactBackground from '@/images/contactBackground.png'
import PlayAnimation from './PlayAnimation'
import Button from './Button'

const AboutContact = () => {
  return (
    <Wrapper className={'relative h-[40rem] py-20 bg-[<div className="absolute top-0 left-0 w-full h-full bg-[#361033] mix-blend-color"></div>] md:mb-60 mb-110'}>
        <Image src={projectsBackground} width={1000} height={1000} alt='product background' className='w-full h-full object-cover absolute top-0 left-0' />
        <div className="flex flex-col gap-5 items-center">
            <div className="flex justify-center items-center px-10 py-2 rounded-full bg-[#b576b3]">
                <p className="font-light text-white">CONTACT</p>
            </div>
            <h6 className="text-4xl text-center font-bold text-white">Request A Free Consultation</h6>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:h-[35rem] md:translate-y-40 translate-y-20" style={{
            clipPath: 'polygon(0% 0%, 100% 1.25%, 100% 98.75%, 0% 97.75%)'
        }}>
            <div className="flex justify-center items-center relative h-full">
                <Image src={contactBackground} alt='contact background ' width={1000} height={1000} className='w-full h-full object-cover' />
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <PlayAnimation />
                </div>
            </div>
            <div className="md:p-10 p-5 flex flex-col justify-center gap-5 bg-gradient-to-t to-[#feffff] from-[#f3f6ff]">
                <form action="" className="flex flex-wrap gap-5">
                    <input type="text" className="bg-white border-2 outline-none rounded-sm text-light p-4 flex-grow border-[#f1f5fb]" placeholder='Name' />
                    <input type="text" className="bg-white border-2 outline-none rounded-sm text-light p-4 flex-grow border-[#f1f5fb]" placeholder='E-Mail' />
                    <input type="text" className="bg-white border-2 outline-none rounded-sm text-light p-4 flex-grow border-[#f1f5fb]" placeholder='Phone Number' />
                    <input type="text" className="bg-white border-2 outline-none rounded-sm text-light p-4 flex-grow border-[#f1f5fb]" placeholder='Your Website' />
                    <textarea className="bg-white border-2 outline-none rounded-sm text-light p-4 flex-grow w-full border-[#f1f5fb]" placeholder='Your Message Here' rows={5} col='10' />
                    <Button text={"Submit Now"} className={'font-semibold text-white px-10 py-4 rounded-full'} />
                </form>
            </div>
        </div>
    </Wrapper>
  )
}

export default AboutContact