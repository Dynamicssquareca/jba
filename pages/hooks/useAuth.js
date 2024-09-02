import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AppURL from '../api/AppUrl';
 
const useAuth = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('authToken');
 
      if (!token) {
        window.location.replace('/user/login');
        return;
      }
 
      try {
        const response = await fetch(AppURL.UserDetails, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
 
        if (response.ok) {
          const data = await response.json();
          if (data.status === 1) {
            setUserData(data.data);
          } else {
            window.location.replace('/user/login');
          }
        } else {
            window.location.replace('/user/login');
        }
      } catch (error) {
        console.error('Authentication failed', error);
        window.location.replace('/user/login');
      }
      finally {
        setLoading(false);
      }
    };
 
    fetchUserData();
  }, [router]);
 
  return {userData,loading};
};
 
export default useAuth;