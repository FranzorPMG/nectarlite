'use client'
import React from 'react'
import { Play } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const PlayAnimation = () => {
    useGSAP(() => {
        gsap.to('.animate', {
            width: '150px',
            height: '150px',
            opacity: 0,
            duration: 1.5,
            ease: 'power1.inOut',
            repeat: -1,
            stagger: 0.5,
        })
    })
  return (
    <div className="flex justify-start items-center relative w-20 h-20">
        <div className="border-purple-900 border-2 flex w-20 h-20 justify-center absolute left-1/2 -translate-x-1/2 animate items-center rounded-full">
        </div>
        <div className="border-purple-900 border-2 flex w-20 h-20 justify-center absolute left-1/2 -translate-x-1/2 animate items-center rounded-full">
        </div>
        <div className="bg-gradient-to-t from-purple-900 to-purple-500 w-20 h-20 rounded-full flex justify-center items-center">
            <Play color='white' size={20} />
        </div>
    </div>
  )
}

export default PlayAnimation