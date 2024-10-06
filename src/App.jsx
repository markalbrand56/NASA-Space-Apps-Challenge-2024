import { useState, useEffect } from 'react'
import './App.css'
import Grid from './components/Grid/Grid'
import BackgroundMusic from './components/BackgroundMusic/BackgroundMusic'

import PocketBase from "pocketbase"

function App() {

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const pb = new PocketBase(backendUrl)
  pb.autoCancellation(false);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
        try {
            const records = await pb.collection('gallery').getFullList({
            });
            setData(records);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col bg-black h-full w-full'>
      {
        console.log(data)
      }
            <Grid imgs={data} />
            <BackgroundMusic />
    </div>
  )
}

export default App
