import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, you would clear the user's authentication token here
    // For example: localStorage.removeItem('authToken');
    console.log("User logged out. Redirecting...");
    
    // Redirect to the homepage after a brief delay
    const timer = setTimeout(() => {
      navigate('/');
    }, 1000); 

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Logging out...</h1>
    </div>
  );
};

export default LogoutPage;