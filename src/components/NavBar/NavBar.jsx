import React from "react";

import Logo from "./Logo/Logo";
import UserButton from "./UserButton/UserButton";

import './NavBar.css'
import ThemeToggle from "./ThemeComponent/ThemeComponent";

const NavBar = () => {

  return (
    <nav className="NavBar">
      <Logo/>
      <ThemeToggle/>
      <UserButton/>
    </nav>
  )
};


export default NavBar;
