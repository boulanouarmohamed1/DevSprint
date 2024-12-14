"use client";

import { useRef, useState, useEffect } from "react";

export default function ServicesSection() {
  const scrollContainer = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const services = [
    {
      title: "UI/UX Design",
      image: "../assets/Frame 61.svg",
      description: "Crafting visually appealing and user-friendly designs.",
    },
    {
      title: "UI/UX Design",
      image: "../assets/Frame 61.svg",
      description: "Crafting visually appealing and user-friendly designs.",
    },
    {
      title: "UI/UX Design",
      image: "../assets/Frame 61.svg",
      description: "Crafting visually appealing and user-friendly designs.",
    },
    {
      title: "UI/UX Design",
      image: "../assets/Frame 61.svg",
      description: "Crafting visually appealing and user-friendly designs.",
    },
  ];

  // Function to handle horizontal scrolling
  const scroll = (direction) => {
    const containerWidth = scrollContainer.current.offsetWidth;
    if (direction === "left") {
      scrollContainer.current.scrollBy({ left: -containerWidth, behavior: "smooth" });
    } else {
      scrollContainer.current.scrollBy({ left: containerWidth, behavior: "smooth" });
    }
  };

  // Function to update the active dot based on scroll position
  const updateActiveDot = () => {
    const scrollLeft = scrollContainer.current.scrollLeft;
    const containerWidth = scrollContainer.current.offsetWidth;
    const activeIndex = Math.round(scrollLeft / containerWidth);
    setActiveDot(activeIndex);
  };

  // Attach scroll event listener to update active dot
  useEffect(() => {
    const container = scrollContainer.current;

    container.addEventListener("scroll", updateActiveDot);
    return () => {
      container.removeEventListener("scroll", updateActiveDot);
    };
  }, []);

  // Scroll to the corresponding section when a dot is clicked
  const scrollToDot = (index) => {
    const containerWidth = scrollContainer.current.offsetWidth;
    const scrollLeft = index * containerWidth;

    scrollContainer.current.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });

    setActiveDot(index);
  };

  return (
    <section className="bg-white text-black py-20">
      <div className="container mx-auto px-4 py-10">
        {/* Scrollable Container */}
        <div
          ref={scrollContainer}
          className="flex overflow-x-hidden space-x-6 px-4"
          style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveDot(index)}
              className="min-w-[calc(33.33%-1rem)] rounded-xl shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl hover:bg-blue-500 duration-300 ease-in-out"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="p-6 flex flex-col items-center">
                <h3 className="text-xl font-bold text-center mb-4 border-b-2 border-gray-300 pb-4">
                  {service.title}
                </h3>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-2xl transition-transform duration-300 ease-in-out hover:scale-125"
                  />
                </div>
                <p className="text-center text-gray-600 hover:text-white mt-4">
                  {service.description}
                </p>
                <button className="mt-4 bg-blue-600 text-white p-4 rounded-full hover:bg-blue-500">
                  <span className="text-2xl">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-8">
          {services.map((_, index) => (
            <span
              key={index}
              onClick={() => scrollToDot(index)}
              className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-transform transform hover:scale-125 ${
                activeDot === index ? "bg-blue-500" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
