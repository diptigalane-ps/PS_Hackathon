import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Header from "./components/Header";
import Sidebar from "./components/SideBar.js";
import Dashboard from "./components/Dashboard";
import GoalsForm from "./components/GoalsForm"; // Ensure this path is correct
import Investment from "./components/Investment";
import Knowledge from "./components/Knowledge";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{ redirect_uri: window.location.origin }}>
      <Provider store={store}>
        <Router>
          <Header onMenuClick={() => setSidebarOpen(true)} />
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/goals" element={<GoalsForm />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/knowledge" element={<Knowledge />} />
          </Routes>
        </Router>
      </Provider>
    </Auth0Provider>
  );
}

export default App;
