import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-evenly bg-[#1A0B2E] p-6">
      <div className="logo">
        <h1>E</h1>
      </div>
      <div className="nav-items">
        <ul className="flex justify-evenly items-center gap-16 group ">
          <li>Home</li>
          <li>About</li>
          <li>Lab</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
