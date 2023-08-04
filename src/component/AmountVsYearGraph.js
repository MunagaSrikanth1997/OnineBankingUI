// AmountVsYearGraph.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale, LinearScale, PointElement, LineElement, Chart } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const AmountVsYearGraph = ({ data }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Amount vs. Year',
        data: [],
        fill: true,
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderColor: '#007bff',
        borderWidth: 2,
        pointBackgroundColor: '#007bff',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
    ],
  });

  useEffect(() => {
    // Update the chart data when the data prop changes
    setChartData({
      labels: data.map((item) => new Date(item.transactionDate).getFullYear()),
      datasets: [
        {
          label: 'Amount vs. Year',
          data: data.map((item) => item.amount),
          fill: true,
          backgroundColor: 'rgba(0, 123, 255, 0.2)',
          borderColor: '#007bff',
          borderWidth: 2,
          pointBackgroundColor: '#007bff',
          pointRadius: 4,
          pointHoverRadius: 5,
        },
      ],
    });
  }, [data]);

  const chartOptions = {
    maintainAspectRatio: false, // Make the chart responsive and not constrained by parent container
    scales: {
      x: {
        type: 'category',
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 6, // Limit the number of x-axis ticks to improve readability
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount',
          color: '#333',
          font: {
            size: 14,
          },
        },
        ticks: {
          beginAtZero: true,
          callback: (value) => `$${value}`, // Prefix the y-axis ticks with "$"
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: true,
        text: 'Amount vs. Year', // Your chart title here
        position: 'top', // Position the title at the top of the chart
        align: 'center', // Align the title text at the center
        font: {
          size: 18, // Set the font size of the title
          weight: 'bold', // Set the font weight of the title
        },
        padding: {
          top: 10, // Add padding at the top to separate title from chart
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      {/* Set explicit maxWidth for the container div to limit chart size */}
      <div style={{ width: '100%', position: 'relative' }}>
        {/* Set width to 100% for auto-width */}
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default AmountVsYearGraph;
