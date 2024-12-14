import React from 'react';

const HireMe = () => {
  return (
    <div className='flex justify-center my-20 bg-[#F2F4F7] h-[696px] items-center mx-14 p-10'>
      <div className="px-16 flex justify-evenly items-center gap-10 max-w-7xl">
        {/* Image Section */}
        <div className="w-2/4 overflow-hidden ">
          <img src="../assets/Frame 75.svg" alt="Group" className="w-[500px] h-[500px] object-cover" />
        </div>

        {/* Content Section */}
        <div className="w-2/4 flex flex-col items-start  justify-between py-28 gap-6 text-sm pr-10">
          <div className="font-bold text-5xl mb-2 text-left text-gray-600">
            Why <span className="text-blue-500">Hire Me?</span>
          </div>
          <h2 className="text-gray-600 text-lg mb-4 text-left ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.
          </h2>
          <div className="flex space-x-8 mb-4 justify-between items-start w-full">
            <div className="text-left">
              <h1 className='font-bold text-2xl px-10 py-6'>450+</h1>
              <h1 className='text-2xl'>projects completed</h1>
            </div>
            <div className="text-left">
              <h1 className='font-bold text-2xl px-10 py-6'>450+</h1>
              <h1 className='text-2xl'>projects completed</h1>
            </div>
          </div>
          <button className="border-2 w-[300px] border-black text-black bg-white py-4 px-6 hover:bg-black hover:text-white rounded-3xl font-bold text-xl transition-all duration-500">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
