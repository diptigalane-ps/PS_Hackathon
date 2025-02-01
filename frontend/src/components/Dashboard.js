import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ExpenseModal from './ExpenseModal';
import IncomeModal from './IncomeModal'; // Import the IncomeModal

const Dashboard = () => {
  const [openExpenseModal, setOpenExpenseModal] = useState(false);
  const [openIncomeModal, setOpenIncomeModal] = useState(false); // State for IncomeModal

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
        <Button
          onClick={() => setOpenExpenseModal(true)}
          variant="outlined"
        >
          Add Transaction
        </Button>

        {/* New Button for Income Modal */}
        <Button
          onClick={() => setOpenIncomeModal(true)}
          variant="outlined"
        >
          Add Income
        </Button>

        {/* Expense Modal */}
        <ExpenseModal
          open={openExpenseModal}
          close={() => setOpenExpenseModal(false)}
        />

        {/* Income Modal */}
        <IncomeModal
          open={openIncomeModal}
          close={() => setOpenIncomeModal(false)}
        />
      </Grid>
    </Box>
  );
};

export default Dashboard;
