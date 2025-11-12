import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { Calendar, ChevronRight, User } from 'lucide-react'
import Link from 'next/link'

const BlogCard = ({src, title, desc, services, date, admin}) => {
  return (
    <div className='flex flex-col space-y-5 shadow-[1px_1px_20px_#f6f9fex] bg-white rounded-xl p-5'>
        <div className='relative w-full'>
            <Image src={src} alt={services} width={1000} height={1000} className='w-full rounded-t-xl' />
            <Button text={services} className={'px-5 rounded-4xl py-2 absolute bottom-5 right-5 text-sm font-semibold'} />
        </div>
        <div className="flex gap-5 items-center">
            <div className="flex items-center gap-3">
                <Calendar className='text-purple-500' size={15} />
                <p className='text-sm font-semibold text-[#737373]'>{date}</p>
            </div>
            <div className="flex items-center gap-3">
                <User className='text-purple-500' size={15} />
                <p className='text-sm font-semibold text-[#737373]'>{admin}</p>
            </div>
        </div>
        <h4 className='text-2xl font-bold text-black'>{title}</h4>
        <div className="font-light">{desc}</div>
        <Link href="#" className='text-black flex items-end'>Learn More <ChevronRight size={20} strokeWidth={1} color='black' /></Link>
    </div>
  )
}

export default BlogCard