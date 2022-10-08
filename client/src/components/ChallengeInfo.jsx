import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react';
import {Link, useParams, useNavigate} from "react-router-dom"
import Header from './Header';
import {HiChartBar} from "react-icons/hi"
import {IoIosTimer} from "react-icons/io"
import moment from "moment";

let serverURL = "/api/hackathons";

function ChallengeInfo() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(serverURL + `/getHackathon/${id}`);
        setData(response.data);
    } catch(error) {
      console.log(error);
    }
    setLoading(false);
  }
  
  fetchData();
  }, [id])

  const date = new Date().toISOString();
  const [status, setStatus] = useState("");

  useEffect(() => {
      setTimeout(() => {
          if(date < data.startDate) setStatus("Starts on");
          else if (date >= data.startDate && date <= data.endDate) setStatus("Ends on");
          else setStatus("Ended on");
      }, 1000)
  })

  const deleteHandler = async () => {
    try {
      await axios.delete(serverURL + `/deleteHackathon/${id}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
        <Header />
            {loading && <div className='m-4 text-center'>Loading...</div>}
            {!loading && (
            <div className='mb-10'>
                <div className='bg-[#003145] text-white py-16 pl-16'>
                    <p className='bg-[#FFCE5C] md:w-max text-black rounded flex items-center px-2 py-1 md:pr-10 font-semibold mb-5 md:max-w-max w-64'><IoIosTimer className='mr-2 hidden md:block' /> {status} {moment(status === "Starts on" ? data.startDate : data.endDate).format("LLL")} (India Standard Time)</p>
                    <h1 className='text-3xl font-bold mb-5'>{data.name}</h1>
                    <div className='bg-[#F8F9FD] text-[#003145] flex items-center w-24 justify-center rounded py-1'><HiChartBar className='mr-2' /> {data.level}</div>
                </div>
                <div>
                    <div className='flex justify-between shadow-md pl-16 items-center pt-2'>
                        <p className='border-b-4 border-[#44924C] pb-3 text-xl'>Overview</p>
                        <div className='md:pr-16 pb-2 pr-2'>
                            <Link to={`/hackathon/${data._id}/edit`}><button className='mx-1 text-white bg-[#44924C] px-6 py-2 rounded-md'>Edit</button></Link>
                            <button className='mx-1 text-[#DC1414] border-2 border-[#DC1414] px-4 py-1 rounded-md' onClick={() => deleteHandler()}>Delete</button>
                        </div>
                    </div>
                    <p className='pl-16 mt-10 md:w-3/4 w-full md:pr-0 pr-10'>{data.description}</p>
                </div>
            </div>
            )}
    </>
  )
}

export default ChallengeInfo