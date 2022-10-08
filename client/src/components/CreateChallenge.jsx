import React, { useEffect, useState } from 'react'
import Header from "./Header";
import {BsImageFill} from "react-icons/bs";
import {BiRightArrowAlt} from "react-icons/bi"
import { useParams, useNavigate } from 'react-router-dom';
import { ISOtoDateTimeLocal } from '../utils/utils';
const axios = require("axios").default;

let serverURL = process.env.REACT_APP_SERVER_URL;

function CreateChallenge() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [level, setLevel] = useState("Easy");

  const [loading, setLoading] = useState(false);

  const {id} = useParams();

  useEffect(() => {
    if(id) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(serverURL + `/getHackathon/${id}`);
          setName(response.data.name);
          setStartDate(response.data.startDate);
          setEndDate(response.data.endDate);
          setDescription(response.data.description);
          setImageURL(response.data.image);
          setLevel(response.data.level);
        } catch(error) {
          console.log(error);
        }
        setLoading(false);
      }
    
      fetchData();
    }
  }, [id])

  const uploadImage = async () => {
    if(!image) return;
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "fu5yoj71");
    data.append("cloud_name", "locer");

    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/locer/image/upload", data);
      const url = await response.data.url;
      setImageURL(url);
    } catch(err) {
        console.log(err);
    }
  }

  const submitForm = async (e) => {
    e.preventDefault();
    if(!name || !startDate || !endDate || !level || endDate < startDate) return;

    setLoading(true);
    const btn = document.getElementById("submitBtn");
    btn.disabled = true;
    btn.style.backgroundColor = "#808080";
    btn.style.cursor = "not-allowed";

    await uploadImage();

    const postData = {
      name,
      startDate,
      endDate,
      description,
      image: imageURL,
      level,
    }

    try {
      if(id) {
        await axios.patch(serverURL + `/updateHackathon/${id}`, postData);
        navigate("/")
      }
      else {
        await axios.post(serverURL + "/addHackathon", postData);
        navigate("/");
      }
    } catch(error) {
      console.log(error);
    }

    setLoading(false);
    btn.disabled = false;
    btn.style.backgroundColor = "#44924C";
    btn.style.cursor = "pointer";
  }

  return (
    <div>
        <Header />
        <h1 className='bg-[#F8F9FD] text-2xl text-[black] font-bold pl-16 py-6'>Challenge Details</h1>
        <form className='pl-16 pt-4'>
            <p>(* is required)</p>

            <p className='mt-6 mb-3'>Challenge Name *</p>
            <input type="text" className="border-[#B7B7B7] border rounded px-3 py-1 w-64" name="name" id="name" value={name} required onChange={(e) => setName(e.target.value)} />

            <p className='mt-6 mb-3'>Start Date *</p>
            <input type="datetime-local" className="border-[#B7B7B7] border rounded px-3 py-1 w-64" name="startDate" id="startDate" placeholder='Add start date' value={ id && ISOtoDateTimeLocal(startDate)} required onChange={(e) => setStartDate(e.target.value)} />
                
            <p className='mt-6 mb-3'>End Date *</p>
            <input type="datetime-local" className="border-[#B7B7B7] border rounded px-3 py-1 w-64" name="endDate" id="endDate" placeholder='Add end date' value={id && ISOtoDateTimeLocal(endDate)} required onChange={(e) => setEndDate(e.target.value)} />
            
            <p className='mt-6 mb-3'>Description</p>
            <textarea className="border-[#B7B7B7] border rounded px-3 py-1 md:w-3/5 w-4/5 h-64" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)}/>

            <p className='mt-6 mb-3'>Image</p>
            <input type="file" className="border-[#B7B7B7] border rounded px-3 py-1 bg-[#F4F4F4] w-44" name="image" id="image" onChange={(e) => setImage(e.target.files[0])} />
            {(image || id) && (
              <div className='p-6 bg-[#F8F9FD] rounded-xl mt-4 w-max'>
                <img src={image ? URL.createObjectURL(image) : imageURL} alt="Not found" className='w-64 rounded-xl' />
                <button onClick={() => setImage("")} className="flex mt-2 items-center text-[#44924C]"><BsImageFill className='mr-2' /> Remove image <BiRightArrowAlt className='ml-1'/></button>
              </div>
            )}

            <p className='mt-6 mb-3'>Level Type *</p>
            <select name="levelType" id="levelType" className='border-[#B7B7B7] border rounded px-3 py-1 bg-[#fff] w-44' value={level} required onChange={(e) => setLevel(e.target.value)}>    
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>       
        </form>
        
        <div className='flex items-center'>
          <button type="submit" id="submitBtn" className='ml-16 text-[#fff] bg-[#44924C] font-semibold rounded-md px-5 py-2 hover:bg-[#40864A] block my-12' onClick={(e) => submitForm(e)}>{id ? "Save Changes" : "Create Challenge"}</button>
          {loading && <p className='ml-4'>[Please wait...]</p>}
        </div>
    </div>
  )
}

export default CreateChallenge