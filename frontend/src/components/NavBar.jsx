import React from "react";
import companyLogo from "../assets/lobsterIcon.png";

const NavBar = () => {
  // Determine greeting based on time
  const hour = new Date().getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <nav className="fixed flex w-full top-0 items-center justify-between px-6 py-4 bg-gray-100 ">
      {/* Logo */}
      <div className="flex items-center">
        <img src={companyLogo} alt="Company Logo" className="h-20 w-auto" />
      </div>

      {/* Dynamic Greeting */}
      <div className="text-2xl font-semibold text-gray-800">
        <p>{greeting}!</p>
      </div>
    </nav>
  );
};

export default NavBar;
