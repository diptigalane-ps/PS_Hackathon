import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { login } from '../slice/authSlice'; // Assuming these actions exist in your Redux slice

const AuthButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    await loginWithRedirect();
    if (user) {
      dispatch(login(user)); // Assuming your Redux login action accepts user data
    }
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    dispatch(logout()); // Assuming your Redux logout action clears the user state
  };

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default AuthButton;
