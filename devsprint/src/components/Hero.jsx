import React from 'react';

function Hero() {
  return (
    <div className="font-sans mx-auto max-w-5xl text-center">
      {/* Main Content */}
      <main className="grid place-items-center gap-5 p-5">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold">
            I’m <span className="text-blue-500">Jenny</span>, <br />
            Product Designer
          </h1>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div>
            <p className="font-mono text-sm w-full">
              Jenny’s exceptional product design <br /> ensures our website's
              success. <br /> Highly Recommended.
            </p>
          </div>
          <div>
            <img
              src="../assets/Group(1).svg"
              alt="Jenny"
              className="w-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl">⭐⭐⭐⭐⭐</span>
            <h1 className="font-black">10 Years</h1>
            <p>Experience</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-5">
          {/* Portfolio Button */}
          <button
            className="bg-blue-500 border-2 border-blue-500 text-white py-2 px-4 rounded-md hover:bg-transparent hover:text-blue-500 transition duration-300"
          >
            Portfolio
          </button>
          {/* Hire Me Button with Arrow */}
          <button
            className="bg-gray-800 border-2 border-gray-800 text-white py-2 px-4 rounded-md hover:bg-transparent hover:text-gray-800 transition duration-300 flex items-center"
          >
            Hire me
            <span className="ml-2 text-lg transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Hero;
