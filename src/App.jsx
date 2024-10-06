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
    <div className='flex flex-col h-full w-full relative'>
      <div className='flex flex-row w-full h-15 justify-evenly p-4'>
        <div className='w-full'>
          <TextItem className='text-6xl' />
        </div>
        <BackgroundMusic />
      </div>
      <Grid imgs={data} />
    </div>
  )
}

export default App
