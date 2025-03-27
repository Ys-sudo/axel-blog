import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main-navigation"
      style={{ background: "black", color: "white" }}
    >
      Navbar
    </nav>
  );
};

export default Navbar;
