import { Check, X } from 'lucide-react'
import React from 'react'

const IconComponent = ({checkIcon, index}) => {
  return (
    <>
        {checkIcon === 'checked' ? (
            <Check size={20} className={`${index === 1 ? 'text-white' : 'text-blue-500'}`} strokeWidth={3} />
        ) : (
            <X className={`${index === 1 ? 'text-white' : 'text-blue-500'}`} strokeWidth={3} />
        )}
    </>
  )
}

export default IconComponent