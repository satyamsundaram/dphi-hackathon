import React from 'react'
import Challenges from './Challenges'
import Filters from './Filters'

function Explore() {
  return (
    <div>
      <div className='bg-[#002A3B]'>
        <h3 className='text-2xl text-white font-bold text-center py-10'>Explore Challenges</h3>
        {/* <Filters /> */}
      </div>
        <Challenges />
    </div>
  )
}

export default Explore