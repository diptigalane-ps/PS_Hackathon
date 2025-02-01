import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import { Menu as MenuIcon, Notifications as NotificationsIcon, Logout as LogoutIcon } from "@mui/icons-material";
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0

const Header = ({ onMenuClick }) => {
  const { logout } = useAuth0(); // Move logout here

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Menu Button for Sidebar */}
        <IconButton edge="start" color="inherit" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
          Wealth Management
        </Typography>

        {/* Notification Icon */}
        <IconButton color="inherit">
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {/* Logout Button */}
        <IconButton color="inherit" onClick={() => logout({ returnTo: window.location.origin })}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
