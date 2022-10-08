import React from 'react'
import Stats from './Stats'
import {Link} from "react-router-dom"

function CTA() {
  return (
    <div className='text-white'>
        <div className='bg-[#003145] flex items-center justify-evenly py-10'>
            <div className="flex px-8 py-4 justify-between">
                <div className="h-20 w-2 bg-[#FFCE5C] mr-4"></div>
                <div className="cta-text max-w-md space-y-8 ml-4">
                    <h2 className='text-4xl font-bold leading-14'>
                        Accelerate Innovation with Global AI Challenges
                    </h2>
                    <p className='text-lg'>AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
                    <button className='text-[#003145] font-semibold bg-white rounded-md px-5 py-2 hover:bg-[#efefef]'><Link to="/createChallenge">Create Challenge</Link></button>
                </div>
            </div>
            <img src="/assets/icons/PicsArt_04-14-04.42 1.svg" alt="rocket" className='hidden md:inline-block' />
        </div>
        <Stats />
    </div>
  )
}

export default CTA