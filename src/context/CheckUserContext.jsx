// CheckUserContext.js
import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "./NavigationContext";
import { USERS_URL } from "../models/api";
import axios from "axios";

const CheckUserContext = createContext();

export const CheckUserProvider = ({ children }) => {
  const { setCurrentPage } = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loggedUserName, setLoggedUserName] = useState('');
  const [loggedUserId, setLoggedUserId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userVoted, setUserVoted] = useState(false); // Track if the user has voted
  const [userVotedCandidateId, setUserVotedCandidateId] = useState(null); // Track the candidate the user voted for

  const checkUserCredentials = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(USERS_URL);
      const users = response.data;

      const user = users.find(user => {
        const userEmail = user.email.trim().toLowerCase();
        const inputEmail = email.trim().toLowerCase();
        const userPassword = String(user.password).trim(); 
        const inputPassword = password.trim();
        return userEmail === inputEmail && userPassword === inputPassword;
      });

      if (user) {
        setLoggedUserName(user.name);
        setLoggedUserId(user.id);
        setIsAdmin(user.type === 'admin');
        setUserVoted(user.vote); // Check if the user has voted
        setUserVotedCandidateId(user.votedCandidateId); // Track the candidate they voted for
        setCurrentPage("voting");
      } else {
        setError("One of the data you typed is incorrect.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CheckUserContext.Provider value={{
      checkUserCredentials, 
      isLoading, 
      error, 
      loggedUserName, 
      loggedUserId, 
      isAdmin, 
      userVoted, 
      setUserVoted, 
      userVotedCandidateId, 
      setUserVotedCandidateId 
    }}>
      {children}
    </CheckUserContext.Provider>
  );
};

export const useCheckUser = () => {
  return useContext(CheckUserContext);
};
