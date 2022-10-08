import React from 'react'

function InfoBox({icon, header, text}) {
  return (
    <div className='bg-[#F8F9FD] w-2/5 p-8 m-10 rounded-lg'>
        <img src={icon} alt="icon" />
        <h4 className='font-bold text-xl my-3'>{header}</h4>
        <p>{text}</p>
    </div>
  )
}

export default InfoBox