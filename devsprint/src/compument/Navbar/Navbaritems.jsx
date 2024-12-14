import React from 'react';

const Navbaritems = ({ title, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-30 px-6 py-3  rounded-3xl  transition-all duration-300  
        ${isActive ? 'bg-blue-700 text-white font-bold' : 'hover:bg-blue-700 hover:text-white'}`}
    >
      {title}
    </button>
  );
};

export default Navbaritems;
