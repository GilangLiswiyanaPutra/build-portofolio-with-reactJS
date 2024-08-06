import React from 'react'

const Home = () => {
  return (
    <section id='home' className='flex flex-col items-center justify-center w-full'>
      <h3 className='mt-[20rem] text-white font-bold'>Hello <span className='text-[#00ADB5]'>I am</span></h3>
      <h1 className='text-white font-bold text-6xl'>NEWBIE <span className='text-[#00ADB5]'>WEB</span></h1>
      <h2 className='text-white static font-bold text-6xl'>DEVELOPER</h2>
      <a href="https://www.linkedin.com/in/gilang-liswiyana-putra/" target='_blank'>
      <button className='bg-[#00ADB5] rounded-2xl mt-6 text-white font-semibold hover:text-[#222831] hover:bg-white transition-colors duration-500 text-lg py-2.5 px-6 w-fit text-center'>Know More</button>
      </a>
    </section>
  )
}

export default Home
