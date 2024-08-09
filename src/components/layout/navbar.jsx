import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex bg-darks w-auto p-4 shadow-md shadow-cyan-400/50">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-xl font-bold text-white">
          <a href="/">Gatra</a>
        </h1>
        <ul className="flex space-x-7">
          <li>
            <a href="/" className="text-white font-bold hover:text-dabg-darks transition-colors duration-500">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white font-bold hover:text-dabg-darks transition-colors duration-500">
              About Me
            </a>
          </li>
          <li>
            <a href="/project" className="text-white font-bold hover:text-dabg-darks transition-colors duration-500">
              Project
            </a>
          </li>
          <li>
            <a href="/skill" className="text-white font-bold hover:text-dabg-darks transition-colors duration-500">
              Skill
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar