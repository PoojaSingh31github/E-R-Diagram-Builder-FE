import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-teal-600 text-white py-4 shadow-lg rounded-b-lg sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-extrabold">ER Diagram Builder</h1>
          {/* Navbar Links */}
          <nav className="lg:flex space-x-6">
            <button className="bg-white text-teal-600 px-5 py-2 rounded-full hover:bg-teal-700 hover:text-white transition-all duration-300 transform hover:scale-105">
              Sign In
            </button>
            <button className="bg-white text-teal-600 px-5 py-2 rounded-full hover:bg-teal-700 hover:text-white transition-all duration-300 transform hover:scale-105">
              Sign Up
            </button>
            <button className="bg-yellow-500 text-black px-5 py-2 rounded-full hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105">
              Free Sign Up
            </button>
          </nav>
        </div>
      </header>
  )
}

export default Navbar