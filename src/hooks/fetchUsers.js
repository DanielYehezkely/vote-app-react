import axios from "axios"
import { USERS_URL } from "../models/api"
import { useEffect, useState } from "react"


const useFetchUsers = () => {

  const [users, setUsers] = useState([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  
  useEffect(() => {

    const fetchUsers = async () => {
      setIsLoadingUsers(true)
      try {
        const response = await axios(USERS_URL)
        const usersData = response.data;
        setUsers(usersData);
      } catch (error) {
        throw new Error(error.message)
      } finally {
        setIsLoadingUsers(false)
      };
    }
    fetchUsers();
   
  }, []);

  return {users, isLoadingUsers}
};

export default useFetchUsers;


