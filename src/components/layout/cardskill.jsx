import React from 'react'

const Cardskill = ({ title, description, icons }) => {
  return (
    <div className=" flex-wrap bg-darks text-white p-4 mb-40 rounded-3xl shadow-[0_0_25px_0_rgba(0,123,255,0.3)] hover:shadow-xl transition-shadow duration-300 border-4 border-blues relative w-80 h-80 flex flex-col justify-between">
      <div className="flex space-x-2">
        {icons.map((icon, index) => (
          <img key={index} src={icon} alt="icon" className="h-14" />
        ))}
      </div>
      <div className='mt-auto'>
        <h2 className="text-2xl font-bold mb-2">
          {title}
        </h2>
        <p className="text-white text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Cardskill;
