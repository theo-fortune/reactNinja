import React, { useState } from "react";
import "./nav.css";
import { TbMenu2, TbX } from "react-icons/tb";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="nav">
      <h1 className="logo">SP</h1>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className="nav-menu">
        {toggleMenu ? (
          <TbX
            onClick={() => setToggleMenu(false)}
            className="menu"
            color="#434343"
            size={30}
          />
        ) : (
          <TbMenu2
            onClick={() => setToggleMenu(true)}
            className="exit"
            color="#434343"
            size={30}
          />
        )}
        {toggleMenu && (
          <div className="nav-menu__links scale-up-tr">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
