import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Chart options
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#374151', // neutral gray text
        font: { size: 13, weight: '500' },
      },
    },
    title: {
      display: true,
      text: 'Monthly Performance Overview',
      color: '#111827', // dark gray title
      font: { size: 16, weight: '600' },
    },
  },
  scales: {
    x: {
      ticks: { color: '#4B5563' }, // subtle dark gray
      grid: { display: false },
    },
    y: {
      ticks: { color: '#4B5563' },
      grid: { color: '#E5E7EB' }, // light grid lines
    },
  },
};

// Labels
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// Data
export const data = {
  labels,
  datasets: [
    {
      label: 'Revenue',
      data: [100, 3000, 5000, 7000, 9000, 6000, 4000],
      backgroundColor: 'rgba(34, 197, 94, 0.7)', // modern green
      borderRadius: 6,
    },
    {
      label: 'Expenses',
      data: [3000, 4000, 5000, 1000, 3000, 6000, 9000],
      backgroundColor: 'rgba(59, 130, 246, 0.7)', // soft blue
      borderRadius: 6,
    },
  ],
};

const OurCharts = () => {
  return <Bar options={options} data={data} />;
};

export default OurCharts;
