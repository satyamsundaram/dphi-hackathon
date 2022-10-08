import React from 'react'
import {IoIosArrowDown} from "react-icons/io"
import {MdCheckBoxOutlineBlank} from "react-icons/md"

function Filters() {
  const handleFilterBtn = () => {
    // const dropdown = document.getElementById("dropdown");
    // if(dropdown.style.display === "block")
    //   dropdown.style.display = "none";
    // else dropdown.style.display = "block";
  }

  return (
    <div className='bg-[#002A3B] flex space-x-6 items-start justify-center pb-20 px-4'>
      <input type="text" name="search" id="search" placeholder="Search" className='rounded-md lg:w-2/5 md:w-3/5 w-3/4 py-2 px-4' />
      <div className='bg-[#fff] w-52 pl-2 pb-2 rounded-md'>
        <button id="filterBtn" className='bg-[#fff] flex items-center pb-0 pt-2 px-4 rounded-md' onClick={() => handleFilterBtn()}>Filter <IoIosArrowDown className='ml-10'/></button>
        <div id='dropdown' className='hidden'>
          <div className='bg-[#ECECEC] h-px my-2'></div> 
          <p className='mb-2'>Status</p>
          <p className='flex items-center cursor-pointer w-min'><MdCheckBoxOutlineBlank className='mr-1' /> All</p>
          <p className='flex items-center cursor-pointer w-min'><MdCheckBoxOutlineBlank className='mr-1' /> Active</p>
          <p className='flex items-center cursor-pointer w-min'><MdCheckBoxOutlineBlank className='mr-1' /> Upcoming</p>
          <p className='flex items-center cursor-pointer w-min'><MdCheckBoxOutlineBlank className='mr-1' /> Past</p>
          <div className='bg-[#ECECEC] h-px my-2'></div>
          <p className='mb-2'>Level</p>
          <p className='flex items-center cursor-pointer w-min'><MdCheckBoxOutlineBlank className='mr-1' /> Easy</p>
          <p className='flex items-center cursor-pointer w-min'><MdCheckBoxOutlineBlank className='mr-1' /> Medium</p>
          <p className='flex items-center cursor-pointer w-min'><MdCheckBoxOutlineBlank className='mr-1' /> Hard</p>
        </div>
      </div>
    </div>
  )
}

export default Filters