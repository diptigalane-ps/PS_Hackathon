import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import { Logout, Notifications, Menu } from '@mui/icons-material';
import Sidebar from './Sidebar';  // Import the Sidebar component

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const unreadNotifications = 3; // Example: replace with dynamic value

  const handleLogout = () => {
    // Handle logout logic
    console.log('Logged out');
  };

  const handleNotifications = () => {
    // Handle notification logic
    console.log('Notifications clicked');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);  // Toggle sidebar visibility
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/* Menu Icon on the left */}
          <IconButton
            size="large"
            color="inherit"
            onClick={toggleSidebar}
            sx={{ marginRight: 2 }}
          >
            <Menu />
          </IconButton>

          {/* Title in the middle */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Wealth Management Portal
          </Typography>

          <div>
            {/* Notification Icon with Badge */}
            <IconButton
              size="large"
              color="inherit"
              onClick={handleNotifications}
              sx={{ marginRight: 2 }}
            >
              <Badge
                badgeContent={unreadNotifications}
                color="error"
              >
                <Notifications />
              </Badge>
            </IconButton>

            {/* Logout Icon */}
            <IconButton
              size="large"
              color="inherit"
              onClick={handleLogout}
            >
              <Logout />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};

export default Header;
