import React from 'react';

const Footer = () => {
  return (
    <div className='px-14 pt-10 items-center'>
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <h1 className='font-bold text-5xl '>Let’s Connect Together</h1>
        <button className="bg-blue-500 text-2xl font-bold rounded-3xl text-white px-4 py-2 flex justify-between items-center hover:bg-blue-700 group">
  <h1>Hire Me</h1>
  <img 
    src="assets/up right.svg" 
    alt="assets/up right.svg" 
    className="transition-transform duration-300 group-hover:rotate-45"
  />
</button>

      </div>

      <hr className="my-4 border-gray-300" />

      {/* Main Footer Section */}
      <div className="flex justify-between items-start p-4 space-x-8">
        {/* Logo Section */}
        <div className="w-1/2">
          <div className="text-2xl font-bold py-4">LOGO</div>
          <div className="text-gray-600 pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </div>
          <div>
            <img src="assets/Frame 327.svg"></img>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-bold mb-2 text-primary">Navigation</h2>
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Service
          </a>
          <a href="#" className="hover:underline">
            Resume
          </a>
          <a href="#" className="hover:underline">
            Projects
          </a>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-primary font-bold">Contact</h2>
          <p>+20 11 43 63 73 41</p>
          <p>fawzisayed1209@gmail.com</p>
          <p>fawziuiux.com</p>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-primary font-bold">Get the Latest Information</h2>
          <form className="flex ">
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-s-lg px-2 py-1 flex-1"
            />
            <div className='bg-primary flex justify-center rounded-e-lg w-10'> 
            <img src="assets/filled.svg" alt="assets/filled.svg" />
            </div>
          </form>
        </div>
      </div>

      <hr className="my-4 border-gray-300" />

      {/* Bottom Section */}
      <div className="flex justify-between items-center p-4 ">
        <h1>Copyright© 2023 Fawziuiux. All Rights Reserved.</h1>
        <h1>User Terms & Conditions | Privacy Policy</h1>
      </div>
    </div>

  );
};

export default Footer;
