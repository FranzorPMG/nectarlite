'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import logo from '@/images/logo.png'
import { MapPin, Mail, Phone, Search, Facebook, Twitter, Instagram, Menu, X } from 'lucide-react'
import Wrapper from './Wrapper'
import Link from 'next/link'

const Navbar = () => {
    const [active, setActive] = useState(false);
  return (
    <div className='overflow-x-hidden'>
        <div className="flex justify-between items-center px-5 fixed w-full bg-white z-10 md:hidden">
            <Image src={logo} alt='logo' width={1000} height={1000} className='w-15' />
            <Menu onClick={() => setActive(true)} />
        </div>
        <header className='md:block hidden' >
            <Wrapper>
                <div className="flex justify-between items-center">
                    <div className="w-20">
                        <Image src={logo} width={1000} height={1000} alt='logo' className='w-full' />
                    </div>
                    <div className="flex space-x-5 items-center">
                        <div className="flex items-center space-x-2">
                            <MapPin size={30} strokeWidth={1} color='#7eb3ef' />
                            <div className="flex flex-col -space-y-1">
                                <p className='text-black font-semibold'>Address</p>
                                <p className='text-black font-light'>05 kandi BR. New York</p>
                            </div>
                        </div>
                        <div className="w-[0.5px] h-[2rem] bg-[#eeeeee]"></div>
                        <div className="flex items-center space-x-2">
                            <Mail size={30} strokeWidth={1} color='#7eb3ef' />
                            <div className="flex flex-col -space-y-1">
                                <p className='text-black font-semibold'>Email</p>
                                <p className='text-black font-light'>contact@gmail.com</p>
                            </div>
                        </div>
                        <div className="w-[0.5px] h-[2rem] bg-[#eeeeee]"></div>
                        <div className="flex items-center space-x-2">
                            <MapPin size={30} strokeWidth={1} color='#7eb3ef' />
                            <div className="flex flex-col -space-y-1">
                                <p className='text-black font-semibold'>Address</p>
                                <p className='text-black font-light'>+019988772</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
            <div className="bg-gradient-to-r bg-gradient-to-r from-blue-900 to-blue-500 py-5">
                <Wrapper className={'flex justify-between items-center'}>
                    <ul className='flex space-x-10'>
                        <li className='text-white font-bold'><Link href=''>Home</Link></li>
                        <li className='text-white font-bold'><Link href=''>About</Link></li>
                        <li className='text-white font-bold'><Link href=''>Services</Link></li>
                        <li className='text-white font-bold'><Link href=''>Pages</Link></li>
                        <li className='text-white font-bold'><Link href=''>Blog</Link></li>
                        <li className='text-white font-bold'><Link href=''>Contact</Link></li>
                    </ul>
                    <div className="flex items-center space-x-5">
                        <Search size={20} strokeWidth={1} color='white' />
                        <div className="w-[0.5px] h-[2rem] bg-[#eeeeee]"></div>
                        <Facebook size={20} strokeWidth={1} color='white' />
                        <Twitter size={20} strokeWidth={1} color='white' />
                        <Instagram size={20} strokeWidth={1} color='white' />
                    </div>
                </Wrapper>
            </div>
        </header>
        <header className={`md:hidden transition-transform duration-500 ease-in-out block fixed w-full left-0 top-0 z-20 ${active ? "translate-x-0" : 'translate-x-full'}`}>
            <div className="bg-white py-5">
                <X className='ms-auto me-5 my-5' onClick={() => setActive(false)} />
                <Wrapper className={'flex md:flex-row flex-col justify-between md:items-center'}>
                    <ul className='flex space-x-10 space-y-10 md:flex-row flex-col'>
                        <li className='text-black font-light border-b border-[#f6f7f9]'><Link href=''>Home</Link></li>
                        <li className='text-black font-light border-b border-[#f6f7f9]'><Link href=''>About</Link></li>
                        <li className='text-black font-light border-b border-[#f6f7f9]'><Link href=''>Services</Link></li>
                        <li className='text-black font-light border-b border-[#f6f7f9]'><Link href=''>Pages</Link></li>
                        <li className='text-black font-light border-b border-[#f6f7f9]'><Link href=''>Blog</Link></li>
                        <li className='text-black font-light border-b border-[#f6f7f9]'><Link href=''>Contact</Link></li>
                    </ul>
                    <div className="flex items-center space-x-5">
                        <Search size={20} strokeWidth={1} color='white' />
                        <div className="w-[0.5px] h-[2rem] bg-[#eeeeee]"></div>
                        <Facebook size={20} strokeWidth={1} color='white' />
                        <Twitter size={20} strokeWidth={1} color='white' />
                        <Instagram size={20} strokeWidth={1} color='white' />
                    </div>
                    <Wrapper>
                        <div className="flex flex-col justify-between items-start">
                            <div className="flex flex-col space-y-5 items-start">
                                <div className="flex items-center space-x-2">
                                    <MapPin size={30} strokeWidth={1} color='#7eb3ef' />
                                    <div className="flex flex-col -space-y-1">
                                        <p className='text-black font-semibold'>Address</p>
                                        <p className='text-black font-light'>05 kandi BR. New York</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Mail size={30} strokeWidth={1} color='#7eb3ef' />
                                    <div className="flex flex-col -space-y-1">
                                        <p className='text-black font-semibold'>Email</p>
                                        <p className='text-black font-light'>contact@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MapPin size={30} strokeWidth={1} color='#7eb3ef' />
                                    <div className="flex flex-col -space-y-1">
                                        <p className='text-black font-semibold'>Address</p>
                                        <p className='text-black font-light'>+019988772</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </Wrapper>
            </div>
        </header>
    </div>
  )
}

export default Navbar