import React from "react";
import { useGlobalContext } from "../Context";
import NavLinks from "./NavLinks";
import { useState } from "react";
import logo from "../assets/logo.svg";
import { LuGoal } from "react-icons/lu";
import { FaBars, FaGlobe, FaUser, FaQuestionCircle } from "react-icons/fa";

const Navbar = () => {
  const { openSidebar, setPageId, isSideBarOpen } = useGlobalContext();

  const handleSubmenu = (e) => {

    // if elemnt does not have NavLinks hide submenu
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };

  return (
    <nav className="nav-center" onMouseOver={handleSubmenu}>
      <h3 className="logo">
        <img src={logo} alt="logo" />
      </h3>

      <button
        onClick={openSidebar}
        className={isSideBarOpen ? "hide-btn" : "toggle-btn"}
      >
        <FaBars />
      </button>
      <NavLinks />

      <div className="icons">
        <FaQuestionCircle />

        <FaGlobe />
        <FaUser />
      </div>
    </nav>
  );
};

export default Navbar;
