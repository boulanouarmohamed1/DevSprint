import React from 'react';

function Discuss() {
  return (
    <div className=" font-extralight pt-12 h-[100vh] w-[100vw] flex flex-col justify-center items-center bg-gray-50">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h1 className="text-7xl font-bold ">Have an Awesome Project</h1>
        <h1 className="text-7xl font-bold">
          Idea? <span className="text-[#1890FF]">Let's Discuss</span>
        </h1>
      </div>

      {/* Email Input Section */}
      <div className="flex items-center bg-white shadow-lg rounded-lg w-[65%]">
        <div className="flex items-center">
          <img
            src="..\assets\sms.png"
            alt="Email Icon"
            className="w-6 h-6 mr-2"
          />
        </div>
        <input
          type="email"
          placeholder="Enter Email Address"
          className="flex-grow text-gray-700 border-none outline-none placeholder-gray-500"
        />
        <button className="bg-[#1890FF] text-white px-6 py-2 rounded-3xl shadow-m hover:bg-[#005bb5] active:bg-white active:text-[#1890FF]">
          Send
        </button>
      </div>

      {/* Additional Information Section */}
      <div className="flex flex-wrap justify-center items-center text-sm text-gray-500 mt-4 gap-44">
        <div className="flex items-center">
          <img
            src="..\assets\star.png"
            alt="Rating Icon"
            className="w-5 h-5 mr-2"
          />
          <span >4.9/5 Average Ratings</span>
        </div>
        <div className="flex items-center">
          <img
            src="..\assets\award.png"
            alt="Awards Icon"
            className="w-5 h-5 mr-2"
          />
          <span>25+ Winning Awards</span>
        </div>
        <div className="flex items-center">
          <img
            src="..\assets\shield-tick.png"
            alt="Certification Icon"
            className="w-5 h-5 mr-2"
          />
          <span>Certified Product Designer</span>
        </div>
      </div>
    </div>
  );
}

export default Discuss;
