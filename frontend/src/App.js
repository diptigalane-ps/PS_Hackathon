import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import GoalsForm from "./components/GoalsForm";
import Investment from "./components/Investment";
import Knowledge from "./components/Knowledge";
import AuthButton from "./components/AuthButton"; // Import AuthButton

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth0();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!isAuthenticated) {
    return <AuthButton />; // Show login button instead of navigating to another page
  }

  return (
    <>
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/goals" element={<GoalsForm />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/knowledge" element={<Knowledge />} />
      </Routes>
    </>
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
        </Router>
      </Provider>
    </Auth0Provider>
  );
}

export default App;
