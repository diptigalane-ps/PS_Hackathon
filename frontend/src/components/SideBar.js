import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Import Link

const Sidebar = ({ open, onClose }) => {
  const menuItems = [
    { text: 'Goals', path: '/GoalsForm' },  
    { text: 'Investment', path: '/investment' },
    { text: 'Knowledge', path: '/knowledge' },
    { text: 'Dashboard', path: '/' },
    { text: 'Income', path: '/income' }
  ];

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
        }
      }}
    >
      <IconButton onClick={onClose} sx={{ margin: 2 }}>
        <Close />
      </IconButton>

      <List>
        {menuItems.map((item, index) => (
          <ListItem 
            key={index} 
            component={Link} 
            to={item.path} 
            onClick={onClose} // Close sidebar on navigation
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>

      <Divider />
    </Drawer>
  );
};

export default Sidebar;
