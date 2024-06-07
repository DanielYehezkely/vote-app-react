import React from "react";

import Logo from "./Logo/Logo";
import UserButton from "./UserButton/UserButton";

import './NavBar.css'

const NavBar = () => {

  return (
    <nav className="NavBar">
      <Logo/>
      <UserButton/>
    </nav>
  )
};


export default NavBar;
