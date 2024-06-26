import React, { useState } from "react";

import { useCheckUser } from "../../../context/CheckUserContext";
import { useNavigate } from "../../../context/NavigationContext";
import ThemeToggle from '../ThemeComponent/ThemeComponent';
import { useTheme } from '../../../theme/ThemeContext';

import './UserButton.css';

const UserButton = () => {
  const [showButtons, setShowButtons] = useState(false);
  const { loggedUserName, isAdmin } = useCheckUser();
  const { setCurrentPage } = useNavigate();
  const { setTheme } = useTheme(); 

  const handleUserButtonClick = () => {
    setShowButtons(prevState => !prevState);
  };

  const handleLogOutButtonClick = () => {
    setTheme('light'); 
    setCurrentPage('form');
  };

  const handleAdminButtonClick = () => {
    setCurrentPage('admin');
  };

  const handleVotingButtonClick = () => {
    setCurrentPage('voting');
  };

  return (
    <div className="user-button-container">
      <ThemeToggle />
      <button className="UserButton btn" onClick={handleUserButtonClick}>
        <i className="fa-solid fa-user-ninja"></i>
        <span>{loggedUserName}</span>
      </button>

      <div className={`user-sub-buttons ${showButtons ? 'show' : ''}`}>
        <button className="btn btn-light log-out" onClick={handleLogOutButtonClick}>
          Log Out
        </button>
        {isAdmin && (
          <>
            <button className="btn btn-light admin-button" onClick={handleAdminButtonClick}>
              Admin
            </button>
            <button className="btn btn-light manage-voting-button" onClick={handleVotingButtonClick}>
              Voting
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserButton;
