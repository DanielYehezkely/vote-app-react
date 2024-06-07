import { createContext, useState, useContext } from "react";
import { useNavigate } from "./NavigationContext";
import { USERS_URL } from "../models/api";
import axios from "axios";

const CheckUserContext = createContext();

export const CheckUserProvider = ({ children }) => {
  const { setCurrentPage } = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkUserCredentials = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios(USERS_URL);
      const users = response.data;
      console.log(users);
      if (response.status !== 200) {
        throw new Error('error occurred')
      }
      const user = users.find(user => {
        const userEmail = user.email.trim().toLowerCase();
        const inputEmail = email.trim().toLowerCase();
        const userPassword = String(user.password).trim(); 
        const inputPassword = password.trim();
        return userEmail === inputEmail && userPassword === inputPassword;
      });

      if (user) {
        setCurrentPage("voting");
        return ;
      } else {
        setError("One of the data you typed is incorrect.");
        return ;
      }

    } catch (err) {
      setError(err.message);
      return ;

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CheckUserContext.Provider value={{ checkUserCredentials, isLoading, error }}>
      {children}
    </CheckUserContext.Provider>
  );
};

export const useCheckUser = () => {
  return useContext(CheckUserContext);
};
