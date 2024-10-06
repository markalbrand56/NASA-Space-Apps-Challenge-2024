import { useState } from 'react'
import './App.css'
import Grid from './Grid/Grid'
import { info } from 'autoprefixer'

function App() {
  const [count, setCount] = useState(0)

  const images = [
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/James_Webb_Space_Telescope_2009_bottom.jpg/750px-James_Webb_Space_Telescope_2009_bottom.jpg",
        info: "James Webb Space Telescope 2009 bottom"
      },
      {
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/James_Webb_Space_Telescope_2009_top.jpg/750px-James_Webb_Space_Telescope_2009_top.jpg",
        info: "James Webb Space Telescope 2009 top"
      }
  ]

  return (
    <div className='flex flex-col bg-black h-full w-full'>
            <Grid imgs={images} />
    </div>
  )
}

export default App
