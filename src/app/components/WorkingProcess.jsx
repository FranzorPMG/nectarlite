import React from 'react'
import Wrapper from './Wrapper'
import workingProcess from '@/images/workingProcess.png'
import Button from './Button'

const WorkingProcess = () => {
  const processData = [
    {
      title: "Descovery", 
      desc: 'This is where clarity begins. We conduct in-depth research, define the core problem, validate assumptions, and align stakeholders to establish a clear, data-driven product vision and definitive project scope.'
    },
    {
      title: "Planning", 
      desc: 'We turn vision into a detailed blueprint. This phase generates a complete strategic roadmap, technical architecture, resource plan, and defined milestones, ensuring a predictable, efficient, and successful execution phase.'
    },
    {
      title: "Execute", 
      desc: 'The core build phase. Using Agile and DevOps methodologies, our expert teams rapidly develop, integrate, and rigorously test the solution. We prioritize transparency and continuous feedback to build the right product, right.'
    },
    {
      title: "Descovery", 
      desc: 'Successful launch and transition. We manage the secure, seamless deployment of the final product, provide comprehensive training, and supply all documentation needed to ensure a smooth, confident handover and sustained operational success.'
    },
  ]
  return (
    <Wrapper className={'md:my-40 my-60 grid md:grid-cols-[3.2fr_6.8fr] gap-20'}>
        <div className="p-10 py-20 rounded-xl flex flex-col space-y-5 items-start" style={{
            backgroundImage: `url(${workingProcess.src})`
        }}>
            <p className="text-white font-light">WORKING PROGRESS</p>
            <span className='text-[2.3rem] font-bold text-white leading-12'>Our Working Process - How We Work For Our Customers</span>
            <Button text={'Contact Us'} className={'text-white font-bold px-10 py-4 rounded-lg'} />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {processData.map((process, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <span className="text-5xl font-bold text-[#000060]">{index + 1}.</span>
              <p className="text-2xl text-black font-semibold">{process.title}</p>
              <p>{process.desc}</p>
            </div>
          ))}
        </div>
    </Wrapper>
  )
}

export default WorkingProcess