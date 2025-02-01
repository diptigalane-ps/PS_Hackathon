import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const investments = [
  { id: 1, name: "Stocks", amount: 15000, returnRate: "8%" },
  { id: 2, name: "Mutual Funds", amount: 10000, returnRate: "12%" },
  { id: 3, name: "Bonds", amount: 5000, returnRate: "5%" },
];

const Investment = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Investment Portfolio
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 3,
        }}
      >
        {investments.map((inv) => (
          <Card key={inv.id} sx={{ minWidth: 200, textAlign: "center" }}>
            <CardContent>
              <Typography variant="h6">{inv.name}</Typography>
              <Typography variant="body1">Amount: ${inv.amount}</Typography>
              <Typography variant="body2">Returns: {inv.returnRate}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ marginTop: 3, textAlign: "center" }}>
        <Button variant="contained" color="primary">
          Add Investment
        </Button>
      </Box>
    </Box>
  );
};

export default Investment;
