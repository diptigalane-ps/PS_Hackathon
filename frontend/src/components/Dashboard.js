import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import TransactionModal from './TransactionModal';
import { Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ExpenseModal from './ExpenseModal';

 const Dashboard = () => {
  const [ openExpenseModal, setOpenExpenseModal ] = useState(false)
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        <Button onClick={() => setOpenExpenseModal(true)} variant="outlined">Add Transaction</Button>
        <ExpenseModal 
          open={openExpenseModal}
          close={() => setOpenExpenseModal(false)}
        />
      </Grid>
    </Box>
  );
};

export default Dashboard;
