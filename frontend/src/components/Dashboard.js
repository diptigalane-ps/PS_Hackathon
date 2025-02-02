import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import { Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useDispatch, useSelector } from 'react-redux';

import ExpensePieChart from './ExpensePieChart';
import StatCard from './StatCard';
import IncomeTable from './IncomeTable';
import ExpenseTable from './ExpenseTable';
import IncomePieChart from './IncomePieChart';
import ExpenseTips from './ExpenseTips';
import CategoryExpenseTable from './CategoryExpenseTable';
import ExpenseModal from './ExpenseModal';
import IncomeModal from './IncomeModal';
import { fetchDashboard } from '../slice/dashboardSlice';

export default function Dashboard() {
  const dispatch = useDispatch();
	const dashboard = useSelector((state) => state.dashboard.data);
	const status = useSelector((state) => state.dashboard.status);

  const [openExpenseModal, setOpenExpenseModal] = useState(false);
  const [openIncomeModal, setOpenIncomeModal] = useState(false); // State for IncomeModal

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDashboard({
        month: "Jan"
      }));
    }
  }, [status, dispatch]);

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid container spacing={2} columns={12} mb={2}>
        {dashboard.total && Object.entries(dashboard.total).map(([key, value]) => (
          <Grid key={key} size={{ xs: 12, lg: 3 }}>
            <StatCard 
              title={key.toUpperCase()}
              value={value.value || 0}
              interval={'This month'}
              trend={
                key === "income" ? "up" : key === "expense" ? "down" : key === "investment" ? "up" : "neutral"
              }
              data={[]}
            />
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
          <Button
            onClick={() => setOpenExpenseModal(true)}
            variant="outlined"
          >
            Add Expense Transaction
          </Button>
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Typography component="h2" variant="h6">
            Finance Tips
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
          {dashboard.pieChart && Array.isArray(dashboard.pieChart.expenses.data) && dashboard.pieChart.expenses.data.length > 0 &&
            <ExpensePieChart 
              data={dashboard.pieChart.expenses.data}
              percentage={dashboard.pieChart.expenses.percentage}
            />
          }
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <ExpenseTips />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <CategoryExpenseTable />
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={12} mb={2}>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Typography component="h2" variant="h6">
            Recent Income Transactions
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }} alignItems={"end"}>
          <Button
            onClick={() => setOpenIncomeModal(true)}
            variant="outlined"
          >
            Add Income Transaction
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={12} mb={2}>
        <Grid size={{ xs: 12, lg: 3 }}>
          <IncomeTable />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <IncomePieChart />
        </Grid>
      </Grid>
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
    </Box>
  );
};
