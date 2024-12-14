import React from "react";

function Mywork() {
  return (
    <div className="bg-gray-50 py-10">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
      <div className=" pb-10">
        <h2 className="text-4xl font-semibold text-center mb-8 ">
          My <span className="text-blue-500">Work Experience</span>
        </h2>
        </div>
        {/* Flex Row */}
        <div className="flex flex-row items-start justify-between gap-8  ">
          {/* Left Text */}
          <div className="flex-1 space-y-16">
            <div>
              <h3 className="text-lg font-bold">Cognizant, Mumbai</h3>
              <p className="text-gray-500">Sep 2016 - July 2020</p>
            </div>
            <div className=" pt-20 pb-10">
              <h3 className="text-lg font-bold">Sugee Pvt Limited, Mumbai</h3>
              <p className="text-gray-500">Sep 2020 - July 2023</p>
            </div>
            <div  className=" pt-15">
              <h3 className="text-lg font-bold">Cinetstox, Mumbai</h3>
              <p className="text-gray-500">Sep 2023</p>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="../assets/Frame 11.png"
              alt="Work Experience Timeline"
              className="w-[48px] h-[400px] max-w-xs object-fit"
            />
          </div>

          {/* Right Text */}
          <div className="flex-1 space-y-16">
            <div>
              <h3 className="text-lg font-bold">Experience Designer</h3>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
                posuere in justo vulputate, bibendum sodales.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">UI/UX Designer</h3>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
                posuere in justo vulputate, bibendum sodales.
              </p>
            </div>
            <div className="pt-10">
              <h3 className="text-lg font-bold">Lead UX Designer</h3>
              <p className="text-gray-500 text-sm">
            
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mywork;
