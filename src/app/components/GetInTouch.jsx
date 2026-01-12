import React from 'react'
import Wrapper from './Wrapper'
import { House, MapPinIcon, Phone } from 'lucide-react'
import Button from './Button'

const GetInTouch = () => {
  return (
    <Wrapper className={'my-40 grid gap-40 md:grid-cols-[1.5fr_2fr] grid-cols-1'}>
        <div className="flex flex-col rounded-lg p-10 bg-gradient-to-r from-purple-900 to-purple-500 text-white gap-5">
            <span className="text-white font-light">LET'S TALK</span>
            <h2 className='text-4xl font-bold'>Speak With Expert Engineers.</h2>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                        <House color='#2f0e2d' size={20} strokeWidth={1} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold">Email:</p>
                        <span className="font-light">example@gmail.com</span>
                    </div>
                </div>
                <div className="flex gap-4 items-center">    
                    <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                        <Phone color='#2f0e2d' size={20} strokeWidth={1} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold">Phone:</p>
                        <span className="font-light">(+088)589-8745</span>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                        <MapPinIcon color='#2f0e2d' size={20} strokeWidth={1} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold">Address:</p>
                        <span className="font-light">New Jersey, 1201, USA</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
                <span className="font-light text-purple-500">GET IN TOUCH</span>
                <h3 className='text-4xl font-bold text-black'>Fill The Form Below</h3>
            </div>
            <form action="" className="flex flex-wrap gap-5">
                <input type="text" className="bg-[#f6f7f9] outline-none rounded-sm text-light p-4 flex-grow" placeholder='Name' />
                <input type="text" className="bg-[#f6f7f9] outline-none rounded-sm text-light p-4 flex-grow" placeholder='E-Mail' />
                <input type="text" className="bg-[#f6f7f9] outline-none rounded-sm text-light p-4 flex-grow" placeholder='Phone Number' />
                <input type="text" className="bg-[#f6f7f9] outline-none rounded-sm text-light p-4 flex-grow" placeholder='Your Website' />
                <textarea className="bg-[#f6f7f9] outline-none rounded-sm text-light p-4 flex-grow w-full" placeholder='Your Message Here' rows={5} col='10' />
                <Button text={"Submit Now"} className={'font-semibold text-white px-10 py-4 rounded-full'} />
            </form>
        </div>
    </Wrapper>
  )
}

export default GetInTouch