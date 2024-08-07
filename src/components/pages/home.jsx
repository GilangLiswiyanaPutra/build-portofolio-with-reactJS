import React from 'react';

const Home = () => {
  const handleExplore = () => {
    window.open("https://www.linkedin.com/in/gilang-liswiyana-putra/", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative flex items-center justify-center w-full h-screen bg-[#222831]">
      {/* background */}
      <div className="absolute w-[700px] h-[50px] bg-transparent border-2 border-orange-500 transform rotate-45"></div>
      <div className="absolute top-10 left-10 flex items-center">
        <div className="w-10 h-10 border-2 border-[#00ADB5] rounded-full flex items-center justify-center">
          <div className="w-5 h-5 bg-[#00ADB5] rounded-full"></div>
        </div>
        <span className="ml-2 text-white font-bold text-2xl">Gatra</span>
      </div>
      <div className="absolute bottom-10 left-10 w-6 h-16 text-orange-600 text-6xl sm:text-7xl font-bold">+</div>
      <div className="absolute top-10 right-10 w-10 h-6 text-orange-600 text-6xl sm:text-7xl font-bold">+</div>
      <div className="absolute bottom-10 right-10 h-52 w-1 bg-white"></div>
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 h-52 w-1 bg-white"></div>

      {/* content */}
      <div className="relative flex flex-col items-center justify-center text-center px-4">
        <h3 className='text-white font-bold text-xl sm:text-4xl'>Hello <span className='text-[#00ADB5]'>I am</span></h3>
        <h1 className='text-white font-bold text-4xl sm:text-9xl'>NEWBIE <span className='text-[#00ADB5]'>WEB</span></h1>
        <h2 className='text-white static font-bold text-4xl sm:text-9xl'>DEVELOPER</h2>
        <button onClick={handleExplore} className='bg-[#00ADB5] rounded-2xl mt-6 text-white font-semibold hover:text-[#222831] hover:bg-white transition-colors duration-500 text-xs py-1 px-2 w-fit text-center sm:px-6 sm:py-2.5 sm:text-lg'>Explore Your Journey</button>
      </div>
    </section>
  );
}

export default Home;
