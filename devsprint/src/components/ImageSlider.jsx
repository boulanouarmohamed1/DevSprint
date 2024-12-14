import React, { useRef, useState } from "react";

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={sliderRef}
      className="slider"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        display: "flex",
        overflowX: "scroll",
        scrollBehavior: "smooth",
        cursor: isDragging ? "grabbing" : "grab",
        gap: "10px",
        padding: "10px",
        scrollbarWidth: "none", // For Firefox
      }}
    >
      <style jsx>{`
        .slider {
          -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
        }
        .slider::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
        }
      `}</style>
      <img
        src="assets/a.svg"
        alt="Image 1"
        style={{
          flex: "0 0 auto",

          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <img
        src="assets/a.svg"
        alt="Image 2"
        style={{
          flex: "0 0 auto",

          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <img
        src="assets/a.svg"
        alt="Image 3"
        style={{
          flex: "0 0 auto",

          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default ImageSlider;
