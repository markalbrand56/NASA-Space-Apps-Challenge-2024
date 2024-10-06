import React from 'react'
import { useState } from 'react';


const Grid = ({imgs}) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [flippedIndex, setFlippedIndex] = useState(null)

  const flipCard = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index)
  }

  return (
    <div className="grid md:grid-cols-4 gap-4">
        {
            imgs.map((img, index) => (
                <div className="relative cursor-pointer" 
                key={index} 
                onClick={() => flipCard(index)}
                >
                  {
                      flippedIndex !== index && (
                        <img
                        src={`${backendUrl}/api/files/${img.collectionId}/${img.id}/${img.image}?token=`}
                        className='w-full h-full object-cover animation'
                        alt="image" 
                        />
                      )
                  }
                  {
                      flippedIndex === index && (
                          <div className="bg-opacity-90 p-2rounded-md w-60 h-60 flex flex-col justify-center items-center">
                            <p dangerouslySetInnerHTML={{ __html: img.description }}></p>
                          </div>
                      )
                  }
                </div>
            ))
        }
    </div>
  )
}

export default Grid