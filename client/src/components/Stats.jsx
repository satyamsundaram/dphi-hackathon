import React from 'react'
import StatIcon from './StatIcon'

function Stats() {
  return (
    <div className="w-screen bg-[#002A3B] flex justify-center">
        <div className='flex py-14 max-w-7xl flex-wrap items-center'>
            <StatIcon icon={"/assets/icons/Group 1000002515.svg"} number={"100K+"} text={"AI model submissions"} />
            <div className='w-px h-8 mx-4 bg-[#C4C4C4] hidden md:inline-block'></div>
            <StatIcon icon={"/assets/icons/Group 1000002516.svg"} number={"50K+"} text={"Data Scientists"} />
            <div className='w-px h-8 mx-4 bg-[#C4C4C4] hidden md:inline-block'></div> 
            <StatIcon icon={"/assets/icons/Group 1000002518.svg"} number={"100+"} text={"AI Challenges hosted"} />
        </div>
    </div>
  )
}

export default Stats