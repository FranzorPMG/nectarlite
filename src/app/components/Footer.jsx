import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import logo from '@/images/logo.png'
import footerBackground from '@/images/footerBackground.png'
import { Clock, Facebook, Instagram, LocationEdit, LocationEditIcon, Mail, MapPinIcon, Phone, Send, Twitter } from 'lucide-react'
import Link from 'next/link'
import Button from './Button'

const Footer = () => {
  return (
    <Wrapper className={'md:py-20 flex flex-col md:gap-20 relative'}>
        <Image src={footerBackground} width={1000} height={1000} alt='footer background' className='w-full h-full object-cover absolute top-0 left-0' />
        <div className={'grid md:grid-cols-4 grid-cols-1 py-20 relative gap-10'} >
            <div className="flex flex-col space-y-3 relative">
                <Image src={logo} alt='logo' width={1000} height={1000} className='w-20' />
                <h1 className='font-bold text-purple-900 text-3xl'>Nectarlite Technology</h1>
                <p className="font-light">Nectarlite Technology is more than a company—it is a growing ecosystem built to simplify life through technology.</p>
                <div className="flex gap-3 items-center">
                    <div className="w-12 h-12 flex justify-center hover:bg-purple-900 transition-all duration-500 ease-in-out cursor-pointer group items-center rounded-full bg-white">
                        <Facebook strokeWidth={1} size={20} className='group-hover:text-white text-[#5a6265]' />
                    </div>
                    <div className="w-12 h-12 flex justify-center hover:bg-purple-900 transition-all duration-500 ease-in-out cursor-pointer group items-center rounded-full bg-white">
                        <Twitter strokeWidth={1} size={20} className='group-hover:text-white text-[#5a6265]' />
                    </div>
                    <div className="w-12 hover:bg-purple-900 transition-all duration-500 ease-in-out cursor-pointer group h-12 flex justify-center items-center rounded-full bg-white">
                        <Instagram strokeWidth={1} size={20} className='group-hover:text-white text-[#5a6265]' />
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-3 relative">
                <span className="text-2xl font-bold text-black">
                    IT Services
                </span>
                <ul className='flex flex-col space-y-3'>
                    <li className='text-[#5a6265] font-light'>
                        <Link href="#">Software Development</Link>
                    </li>
                    <li className='text-[#5a6265] font-light'>
                        <Link href="#">Web Development</Link>
                    </li>
                    <li className='text-[#5a6265] font-light'>
                        <Link href="#">Analytic Solutions</Link>
                    </li>
                    <li className='text-[#5a6265] font-light'>
                        <Link href="#">Cloud and DevOps</Link>
                    </li>
                    <li className='text-[#5a6265] font-light'>
                        <Link href="#">Product Design</Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col space-y-3 relative">
                <span className="text-2xl font-bold text-black">
                    Contact Info
                </span>
                <div className='flex flex-col space-y-3'>
                    <div className="flex space-x-3">
                        <MapPinIcon size={20} strokeWidth={1} className='text-purple-500' />
                        <p className="font-light">374 FA Tower, William S Blvd 2721, IL, USA</p>
                    </div>
                    <div className="flex space-x-3">
                        <Phone size={20} strokeWidth={1} className='text-purple-500' />
                        <p className="font-light">00000000000</p>
                    </div>
                    <div className="flex space-x-3">
                        <Mail size={20} strokeWidth={1} className='text-purple-500' />
                        <p className="font-light">example@gmail.com</p>
                    </div>
                    <div className="flex space-x-3">
                        <Clock size={20} strokeWidth={1} className='text-purple-500' />
                        <p className="font-light">Opening Hours: 10:00 - 18:00</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-3 relative">
                <span className="text-2xl font-bold text-black">
                    Contact Info
                </span>
                <p className="font-light">We denounce with righteious indignation in and dislike men who are so beguiled and to deo realized.</p>
                <div className="relative">
                    <input placeholder='Your email address' type="text" className="bg-white py-3 rounded-full px-5 text-sm w-full" />
                    <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gradient-to-r from-purple-900 to-purple-500 absolute right-0 top-0 cursor-pointer">
                        <Send color='white' strokeWidth={1} size={20} />
                    </div>
                </div>
            </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between gap-5 md:items-center items-start relative">
            <p className='text-[#5a6265]'>© 2025 All Rights Reserved</p>
            <div className="flex md:flex-row flex-col gap-5 items-center">
                <div className="flex gap-3 items-center">
                    <Link href="/" className='text-[#516265]'>Home</Link>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[bg-gradient-to-l from-[#2f0e2d] to-[#b576b3]] to-purple-500" />
                </div>
                <div className="flex gap-3 items-center">
                    <Link href="/about" className='text-[#516265]'>About</Link>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[bg-gradient-to-l from-[#2f0e2d] to-[#b576b3]] to-purple-500" />
                </div>
                {/* <div className="flex gap-3 items-center">
                    <Link href="#" className='text-[#516265]'>Blog</Link>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[bg-gradient-to-l from-[#2f0e2d] to-[#b576b3]] to-purple-500" />
                </div>
                <div className="flex gap-3 items-center">
                    <Link href="#" className='text-[#516265]'>Shop</Link>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[bg-gradient-to-l from-[#2f0e2d] to-[#b576b3]] to-purple-500" />
                </div>
                <div className="flex gap-3 items-center">
                    <Link href="#" className='text-[#516265]'>FAQS</Link>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[bg-gradient-to-l from-[#2f0e2d] to-[#b576b3]] to-purple-500" />
                </div> */}
            </div>
        </div>
    </Wrapper>
  )
}

export default Footer