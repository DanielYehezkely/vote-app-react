import { createContext, useState, useContext } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {

  const [currentPage, setCurrentPage] = useState('form');


  return <NavigationContext.Provider value={{ currentPage, setCurrentPage }}  >
    {children}
  </NavigationContext.Provider>
}

export const useNavigate = () => {
  return useContext(NavigationContext);
}