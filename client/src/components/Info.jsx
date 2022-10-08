import React from 'react'
import InfoBox from './InfoBox'


function Info() {
  return (
    <div className='bg-[#fff] text-[black] py-16'>
       <h3 className='text-3xl font-bold text-center'>Why Participate in <span className='text-[#44924C]'>AI Challenges?</span></h3>
       <div className='flex flex-wrap items-center justify-around'>
            <InfoBox icon={"/assets/icons/carbon_notebook-reference.svg"} header={"Prove your skills"} text={"Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."} />
            <InfoBox icon={"/assets/icons/Vector.svg"} header={"Learn from community"} text={"One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."} />
            <InfoBox icon={"/assets/icons/Robot.svg"} header={"Challenge yourself"} text={"There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."} />
            <InfoBox icon={"/assets/icons/IdentificationCard.svg"} header={"Earn recognition"} text={"You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards."} />
       </div>
    </div>
  )
}

export default Info