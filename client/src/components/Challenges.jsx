import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SingleChallenge from './SingleChallenge';

let serverURL = process.env.REACT_APP_SERVER_URL;

function Challenges() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(serverURL + "/getAllHackathons");
        setData(response.data);
    } catch(error) {
      console.log(error);
    }
    setLoading(false);
  }
  
  fetchData();
  }, [])

  return (
    <div className='bg-[#003145]'>
        {loading && <div className='text-center'>Loading... [Please wait]</div>}
        {!loading && (
          <div className='flex justify-center flex-wrap pt-10'>
            {data.map(hackathon => {
              return <SingleChallenge key={hackathon._id} hackathon={hackathon} />
              })}
          </div>
        )}
    </div>
  )
}

export default Challenges