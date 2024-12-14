import React from 'react';
import HorizontalScroll from './ImageSlider';
import ImageSlider from './ImageSlider';

function MyResult() {
  return (
    <div className="bg-[#f8faff] py-12 ">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Testimonials That <br />
          Speak to <span className="text-[#1890FF]">My Results</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="flex justify-center items-center  ">
        <ImageSlider></ImageSlider>
      </div>
    </div>
  );
}

export default MyResult;