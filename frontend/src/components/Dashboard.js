import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import TransactionModal from './TransactionModal';
import { Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ExpenseModal from './ExpenseModal';
import ExpensePieChart from './ExpensePieChart';
import SessionsChart from './SessionChart';
import StatCard from './StatCard';
import IncomeTable from './IncomeTable';
import ExpenseTable from './ExpenseTable';
import IncomePieChart from './IncomePieChart';
import ExpenseTips from './ExpenseTips';
import CategoryExpenseTable from './CategoryExpenseTable';

 const Dashboard = () => {
  const [ openExpenseModal, setOpenExpenseModal ] = useState(false);

  const data = [
    {
      title: 'Total Income',
      value: '300000.00',
      interval: 'Last 30 days',
      trend: 'up',
      data: [
        200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
        360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
      ],
    },
    {
      title: 'Expenses',
      value: '120000.00',
      interval: 'Last 30 days',
      trend: 'down',
      data: [
        1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
        780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
      ],
    },
    {
      title: 'Investments',
      value: '40000.00',
      interval: 'Last 30 days',
      trend: 'neutral',
      data: [
        500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
        520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
      ],
    },
    {
      title: 'Remaining',
      value: '140000.00',
      interval: 'Last 30 days',
      trend: 'neutral',
      data: [
        500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
        520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
      ],
    },
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid container spacing={2} columns={12} mb={2}>
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, lg: 3 }}>
            <StatCard {...card}/>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} columns={12} mb={2}>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Typography component="h2" variant="h6">
            Recent Expense Transactions
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }} alignItems={"end"}>
          <Button onClick={() => setOpenExpenseModal(true)} variant="outlined">Add Expense Transaction</Button>
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Typography component="h2" variant="h6">
            Manage Expense Tips
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Typography component="h2" variant="h6">
            Expense Vs Spending Limit
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={12} mb={2}>
        <Grid size={{ xs: 12, lg: 3 }}>
          <ExpenseTable />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <ExpensePieChart />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <ExpenseTips />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <CategoryExpenseTable />
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={12} mb={2}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <Typography component="h2" variant="h6">
            Recent Income Transactions
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }} alignItems={"end"}>
          <Button onClick={() => setOpenExpenseModal(true)} variant="outlined">Add Income Transaction</Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={12} mb={2}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <IncomeTable />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <IncomePieChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
