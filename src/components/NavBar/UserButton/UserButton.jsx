import React from "react";

import './UserButton.css'
import { useCheckUser } from "../../../context/CheckUserContext";

const UserButton = () => {

  const {loggedUserName} = useCheckUser();

  console.log(loggedUserName);

  return (
      <button className="UserButton btn" >
      <i className="fa-solid fa-user-ninja"></i>
      <span>{loggedUserName}</span> 
      </button>
  );
};

export default UserButton;
