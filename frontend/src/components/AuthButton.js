import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { login, logout as logoutAction } from '../slice/authSlice';
import { useSpring, animated } from 'react-spring';

const AuthButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    await loginWithRedirect();

    if (user) {
      dispatch(login(user)); 
    }
  };

  const handleLogout = async () => {
    logout({ returnTo: window.location.origin });
    dispatch(logoutAction());
  };

  const pageStyle = {
    background: 'linear-gradient(90deg, hsla(182, 97%, 66%, 1) 30%, hsla(208, 90%, 88%, 1) 100%)',
    padding:'20px 0px 400px 0px'
  }

  const headingStyle = {
    color: 'linear-gradient(90deg, hsla(182, 98%, 18%, 1) 29%, hsla(208, 90%, 88%, 1) 100%)',
    textAlign: 'center',
    fontSize: '50px',
  };

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 }, // Animation duration in milliseconds
  });


  const buttonDiv={
    textAlign:'center',
  }

  const buttonStyle = {
  padding: '12px 25px',
  background: 'linear-gradient(90deg, hsla(182, 97%, 66%, 1) 30%, hsla(208, 90%, 88%, 1) 100%)',
  color: 'black',
  border:'black',
  borderRadius: '8px',
  fontSize: '20px',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };
  

  return (
    <div style={pageStyle}>
    <div style={headingStyle}>
      <animated.div style={fadeIn}>
            <h2>WealthWiz</h2>
            <p>Next-Gen Wealth Management,Powered by AI</p>
      </animated.div>
      </div>
      <div style={buttonDiv}>
      {isAuthenticated ? (
        <button onClick={handleLogout} style={buttonStyle}>Logout</button>
      ) : (
        <button onClick={handleLogin} style={buttonStyle}>Login</button>
      )}
    </div>
    </div>
  );
};

export default AuthButton;
