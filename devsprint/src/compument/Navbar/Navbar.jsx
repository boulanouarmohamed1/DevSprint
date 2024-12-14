import React, { useState } from "react";
import Navbaritems from "./Navbaritems";

export default function NavBar() {
  const [activeItem, setActiveItem] = useState("Home"); // Track the active item

  const handleClick = (title) => {
    setActiveItem(title); // Set the clicked item as active
  };

  return (
    <nav className="mt-10 mx-10 flex justify-between items-center bg-white rounded-3xl ">
      <Navbaritems
        title="Home"
        isActive={activeItem === "Home"}
        onClick={() => handleClick("Home")}
      />
      <Navbaritems
        title="About"
        isActive={activeItem === "About"}
        onClick={() => handleClick("About")}
      />
      <Navbaritems
        title="Service"
        isActive={activeItem === "Service"}
        onClick={() => handleClick("Service")}
      />
      <Navbaritems
        title="Logo"
        isActive={activeItem === "Logo"}
        onClick={() => handleClick("Logo")}
      />
      <Navbaritems
        title="Resume"
        isActive={activeItem === "Resume"}
        onClick={() => handleClick("Resume")}
      />
      <Navbaritems
        title="Project"
        isActive={activeItem === "Project"}
        onClick={() => handleClick("Project")}
      />
      <Navbaritems
        title="Contact"
        isActive={activeItem === "Contact"}
        onClick={() => handleClick("Contact")}
      />
    </nav>
  );
}
