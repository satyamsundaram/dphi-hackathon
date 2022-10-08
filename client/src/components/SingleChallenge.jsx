import React, {useEffect, useState} from 'react'
import {BsCheck2Circle} from "react-icons/bs"
import {Link} from "react-router-dom"
import moment from "moment";
import { calculateTimeLeft } from '../utils/utils';

function SingleChallenge({hackathon}) {
    const date = new Date().toISOString();
    const [timeLeft, setTimeLeft] = useState({});
    const [status, setStatus] = useState("");

    useEffect(() => {
        setTimeout(() => {
            if(date < hackathon.startDate) setStatus("Upcoming");
            else if (date >= hackathon.startDate && date <= hackathon.endDate) setStatus("Active");
            else setStatus("Past");

            if(status === "Upcoming") setTimeLeft(calculateTimeLeft(hackathon.startDate));
            else if(status === "Active") setTimeLeft(calculateTimeLeft(hackathon.endDate));
        }, 1000)
    })

  return (
    <div key={hackathon._id} className="bg-white text-black rounded-lg pb-4 m-5 w-80 flex flex-col items-center md:m-10 lg:m-24">
        <Link className='mb-3 w-full flex justify-center' to={`hackathon/${hackathon._id}`}><img src={hackathon.image ? hackathon.image : "https://images.unsplash.com/photo-1662718552503-208038e6c293?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTEzNjUyNA&ixlib=rb-1.2.1&q=80&w=400"} alt="hackathon_cover" className='h-40 rounded-t-lg' /></Link>
        <p className={`${status === "Upcoming" ? "bg-[#F2C94C]/[.25]" : status === "Active" ? "bg-[#44924C]/[.24]" : "bg-[#FF3C00]/[.17]"} text-[#666666] my-2 py-2 px-3 rounded-md`}>{status}</p>
        <Link to={`hackathon/${hackathon._id}`}><h3 className='text-2xl font-bold my-1 text-center px-2'>{hackathon.name}</h3></Link>

        {status !== "Past" && (
        <div className='mx-2'>
            <p className='text-center'>{status === "Upcoming" ? "Starts in" : "Ends in"}</p>
            <div className='flex-col'>
            <div className='flex justify-center'>
                <p className='mx-2 font-bold text-lg'>{!timeLeft.days ? "00" : ('0'+timeLeft.days).slice(-2)}</p>
                <p className='mx-2 font-bold text-lg'>:</p>
                <p className='mx-2 font-bold text-lg'>{!timeLeft.hours ? "00" : ('0'+timeLeft.hours).slice(-2)}</p>
                <p className='mx-2 font-bold text-lg'>:</p>
                <p className='mx-2 font-bold text-lg'>{!timeLeft.mins ? "00" : ('0'+timeLeft.mins).slice(-2)}</p>
                {/* <p className='mx-2 font-bold text-lg'>:</p>
                <p className='mx-2 font-bold text-lg'>{('0'+timeLeft.secs).slice(-2)}</p> */}
            </div>
        
            <div className='flex'>
                <p className='mx-2'>Days</p>
                <p className='mx-2'>Hours</p>
                <p className='mx-2'>Mins</p>
                {/* <p className='mx-2'>Secs</p> */}
                {/* do mx-1 if you include secs */}
            </div>
            </div>
        </div>
        )}

        {status === "Past" && (
        <div className='mx-2'>
            <p className='text-center'>Ended on</p>
            <p className='font-bold text-lg my-3'>{moment(new Date(hackathon.endDate).toUTCString()).format("LLL")}</p>
        </div>
        )}

        <button className='flex items-center my-2 text-white bg-[#44924C] font-semibold rounded-md pl-3 pr-4 py-2 hover:bg-[#40864A]'><BsCheck2Circle className='mr-3' /> Participate Now</button>

    </div>
  )
}

export default SingleChallenge