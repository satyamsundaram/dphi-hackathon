import React from 'react'
import {IoIosArrowDown} from "react-icons/io"

function Filters() {
  return (
    <div className='bg-[#002A3B] flex space-x-6 justify-center pb-20 px-4'>
      <input type="text" name="search" id="search" placeholder="Search" className='rounded-md md:w-2/5 w-3/4 py-2 px-4' />
      <button className='bg-[#fff] flex items-center py-2 px-4 rounded-md'>Filter <IoIosArrowDown className='ml-2'/></button>
    </div>
  )
}

export default Filters