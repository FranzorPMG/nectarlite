import React from 'react'
import Image from 'next/image'
import Wrapper from './Wrapper'
import dottedBackground from '@/images/dottedBackground.png'
import maradona from '@/images/maradona.png'
import pande from '@/images/pande.png'
import antitni from '@/images/antitni.png'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
const Meet = () => {
  const teamData = [
    {
      name: 'Pull Maradona', 
      title: 'President & CEO',
      Image: maradona
    },
    {
      name: 'Rohit Pande',
      title: 'President & CEO',
      Image: pande
    },
    {
      name: 'Makhaia Antitni',
      title: 'President & CEO',
      Image: antitni
    }
  ]
  return (
    <Wrapper className={'bg-[#361033] relative my-40'}>
        <div className="flex flex-col gap-10 py-20">
            <Image src={dottedBackground} width={1000} height={1000} alt='dotted background' className='w-full h-full object-cover absolute left-0 top-0' />
            <div className="flex flex-col gap-5 items-center">
              <div className="flex justify-center items-center text-white bg-[#b576b342] font-light px-8 py-2 rounded-full">TEAM</div>
              <h3 className="font-bold text-white text-4xl text-center">
                Meet With IT Experts
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gris-cols-1 md:gap-20 justify-items-center">
              {teamData.map((member, index) => (
                <div key={index} className="flex flex-col gap-20 p-5 relative md:w-full w-[60%] items-center">
                  <Image src={member.Image} width={1000} height={1000} alt={member.name} className='w-full rounded-full shadow-lg relative z-1' />
                  <div className="absolute h-60 w-8 rounded-full bg-[#b576b342] rotate-40 -top-2 right-30"></div>
                  <div className="absolute h-60 w-8 rounded-full bg-[#b576b3] rotate-40 -top-2 right-18"></div>
                  <div className="absolute h-50 w-50 rounded-full bg-[#b576b342] bottom-40 right-40"></div>
                  <div className="absolute w-20 h-20 rounded-full bg-[#b576b3] rotate-40 bottom-40 -left-10"></div>
                  <div className="flex flex-col gap-4 items-center">
                    <p className="text-2xl font-semibold text-white">
                      {member.name}
                    </p>
                    <p className="font-light text-white">
                      {member.title}
                    </p>
                    <div className="flex gap-3 items-center">
                      <Facebook color='white' size={20} strokeWidth={1} />
                      <Instagram color='white' size={20} strokeWidth={1} />
                      <Twitter color='white' size={20} strokeWidth={1} />
                      <Linkedin color='white' size={20} strokeWidth={1} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </Wrapper>
  )
}

export default Meet