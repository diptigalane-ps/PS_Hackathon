import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components to use in the chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75, 192, 192, 1)',  // Line color
        backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Fill color under the line
        fill: true,  // Fill the area under the line
        tension: 0.1  // Curvature of the line
      }
    ]
  };

  // Options for the chart
  const options = {
    responsive: true,  // Make the chart responsive
    scales: {
      y: {
        beginAtZero: true  // Start Y-axis at 0
      }
    }
  };

  return (
    <div>
      <h2>Line Chart Example</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Dashboard;
