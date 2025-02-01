import React, { useEffect } from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import AuthButton from './components/AuthButton';
import Header from './components/Header'; // Import the Header component
import Dashboard from './components/Dashboard';
import './App.css';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
  const { user, logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <Provider store={store}>
          <div className="App">
            {/* Pass handleLogout as a prop to Header */}
            <Header onLogout={handleLogout} />
            <Dashboard />
            <AuthButton />
          </div>
        </Provider>
      </Auth0Provider>
    </div>
  );
}

export default App;
