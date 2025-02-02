import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

import { alpha } from '@mui/material/styles';
import {Box, Stack } from '@mui/material';

import Header from "./components/Header";
import Sidebar from "./components/Sidebar.js";
import Dashboard from "./components/Dashboard";
import GoalsForm from "./components/GoalsForm";
import Investment from "./components/Investment";
import Knowledge from "./components/Knowledge";
import AuthButton from "./components/AuthButton"; // Import AuthButton
import Chatbot from "./components/Chatbot"; 

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const ProtectedRoutes = (props) => {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!isAuthenticated) {
    return <AuthButton />; // Show login button instead of navigating to another page
  } else {
    (async () => {
      const value = localStorage.getItem("token");
      if (!value) {
        const response = await getIdTokenClaims();
        localStorage.setItem("token", response.__raw)
      }
    })()
  }

  return (
    <div>
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          backgroundColor: theme.vars
            ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
            : alpha(theme.palette.background.default, 1),
          overflow: 'auto',
        })}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
            mx: 3,
            pb: 5,
            mt: { xs: 8, md: 0 },
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/goals" element={<GoalsForm />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/knowledge" element={<Knowledge />} />
          </Routes>
        </Stack>
      </Box>
    </div>
  );
};

function App() {
  return (
    <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{ redirect_uri: window.location.origin }}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/*" element={<ProtectedRoutes />} />
          </Routes>
          <Chatbot />
        </Router>
      </Provider>
    </Auth0Provider>
  );
}

export default App;
