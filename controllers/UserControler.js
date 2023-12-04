// controllers/UserController.js
import { useState, useEffect } from 'react';
import UserService from '../services/UserService';

const useUserController = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await UserService.fetchUser(userId);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [userId]);

  return { user };
};

export default useUserController;
