import React from "react";
import "../styles/Navbar.css";
import Logo from "../img/BurgerLogo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={Logo} alt="" width={300} />

        <div className="mainLink">
          <Link to={"/"}>Home</Link>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
    </div>
  );
};
