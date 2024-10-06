import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';

const Grid = ({ imgs }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [minLoadingTime, setMinLoadingTime] = useState(true);

  const flipCard = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinLoadingTime(false);
    }, 500); // 0.5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {(loading || minLoadingTime) && (
        <div className="absolute inset-0 flex justify-center items-center bg-black z-50">
          <Loader />
        </div>
      )}
      <div className={`grid md:grid-cols-3 gap-4 overflow-hidden ${loading || minLoadingTime ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 ease-in-out bg-black`}>
        {imgs.map((img, index) => (
          <div
            className={`relative shadow-xl cursor-pointer transition-transform duration-500 ease-in-out transform ${flippedIndex === index ? 'scale-90' : 'scale-100'}`}
            key={index}
            onClick={() => flipCard(index)}
          >
            {flippedIndex !== index && (
              <img
                src={`${backendUrl}/api/files/${img.collectionId}/${img.id}/${img.image}?token=`}
                className='w-full h-80 object-cover z-20 relative transition-opacity duration-500 ease-in-out'
                alt="image"
                onLoad={handleImageLoad}
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