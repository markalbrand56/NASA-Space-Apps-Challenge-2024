import React from 'react'
import { useState } from 'react';

const Grid = ({ imgs }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [flippedIndex, setFlippedIndex] = useState(null)

  const flipCard = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index)
  }

  return (
    <div className="grid md:grid-cols-4 gap-4 overflow-hidden">
      {
        imgs.map((img, index) => (
          <div 
            className={`relative cursor-pointer transition-transform duration-500 ease-in-out transform ${flippedIndex === index ? 'scale-90' : 'scale-100'}`} 
            key={index} 
            onClick={() => flipCard(index)}
          >
            {
              flippedIndex !== index && (
                <img
                  src={`${backendUrl}/api/files/${img.collectionId}/${img.id}/${img.image}?token=`}
                  className='w-full h-full object-cover z-20 relative transition-opacity duration-500 ease-in-out'
                  alt="image" 
                  style={{ opacity: flippedIndex === index ? 0 : 1 }}
                />
              )
            }
            {
              flippedIndex === index && (
                <div className="bg-opacity-90 p-4 rounded-md w-full h-full flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out" style={{ opacity: flippedIndex === index ? 1 : 0 }}>
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

export default Grid;