import React from 'react';

const Card = ({ title, description, image, buttonLabel, buttonLink }) => {

    const handleCard = () => {
        window.open(buttonLink, '_blank');
    };

  return (
    <div className="flex justify-center items-center h-fit mb-20">
      <div className="max-w-4xl rounded-3xl overflow-hidden shadow-[0_0_25px_0_rgba(0,123,255,0.3)] bg-darks border-4 border-blues">
        <div className="grid grid-cols-2 gap-2">
          <div className='p-10'>
            <h2 className="text-white text-3xl font-bold mb-4 mt-24">
              {title}
            </h2>
            <p className="text-white mb-8 font-normal text-sm">
              {description}
            </p>
            <button onClick={handleCard} className="hover:bg-white hover:text-darks text-white font-semibold py-2 px-6 bg-blues transition-colors duration-500 rounded-full">
              {buttonLabel}
            </button>
          </div>
          <div className="flex justify-end">
            <img src={image} alt="image project" className="w-auto h-auto rounded-r-lg" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
