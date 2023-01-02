import React from "react";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <div className={`${styles.navBar} flex items-center justify-evenly p-6`}>
      <div className="logo">
        <h1>E</h1>
      </div>
      <div className="nav-items">
        <ul className="flex justify-evenly items-center gap-16 group ">
          <li>Home</li>
          {/* <li>About</li> */}
          <li>Lab</li>
          <li>Skills</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
