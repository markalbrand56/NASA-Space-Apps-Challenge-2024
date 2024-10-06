import React, { useState, useEffect } from 'react';

const Grid = ({ imgs }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [flippedIndex, setFlippedIndex] = useState(null);

  const flipCard = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div className="relative">
      <div className={`grid md:grid-cols-3 gap-4 overflow-hidden transition-opacity duration-500 ease-in-out bg-black`}>
        {imgs.map((img, index) => (
          <div
            className={`relative shadow-xl cursor-pointer transition-transform duration-500 ease-in-out transform animation ${flippedIndex === index ? 'scale-90' : 'scale-100'}`}
            key={index}
            onClick={() => flipCard(index)}
          >
            {flippedIndex !== index && (
              <img
                src={`${backendUrl}/api/files/${img.collectionId}/${img.id}/${img.image}?token=`}
                className='w-full h-80 object-cover z-20 relative transition-opacity duration-500 ease-in-out'
                alt="image"
                style={{ opacity: flippedIndex === index ? 0 : 1 }}
              />
            )}
            {flippedIndex === index && (
              <div className="bg-opacity-90 p-4 rounded-md w-full h-full flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out" style={{ opacity: flippedIndex === index ? 1 : 0 }}>
                <p dangerouslySetInnerHTML={{ __html: img.description }}></p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;