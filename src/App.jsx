import { useState, useEffect } from 'react'
import './App.css'
import Grid from './components/Grid/Grid'
import BackgroundMusic from './components/BackgroundMusic/BackgroundMusic'
import TextItem from './components/TextItem/TextItem'

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
    <div className='flex flex-col bg-black h-full w-full relative'>
      <div className='flex flex-row bg-white w-full h-15'>
        <p className='text-4xl text-black'>Gallery</p>
      </div>
      <Grid imgs={data} />
      <div className='flex justify-center items-center absolute inset-0'>
        <TextItem className='text-4xl' />
      </div>
      <BackgroundMusic />
    </div>
  )
}

export default App
