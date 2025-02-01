import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const Sidebar = ({ open, onClose }) => {
  const menuItems = [
    { text: 'Goals' },
    { text: 'Investment' },
    { text: 'Knowledge' }
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
      {/* Close Button */}
      <IconButton onClick={onClose} sx={{ margin: 2 }}>
        <Close />
      </IconButton>

      {/* Menu Options */}
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>

      <Divider />
    </Drawer>
  );
};

export default Sidebar;
