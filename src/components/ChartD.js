import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [15, 2, 9, 7, 12],
      backgroundColor: [
        'rgba(94, 66, 0, 1)',
        'rgba(255, 221, 182, 1)',
        'rgba(255, 200, 121, 1)',
        'rgba(229, 165, 0, 1)',
        'rgba(149, 111, 0, 1)',
        
      ],
      borderColor: [
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, 1)',
        
        
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  cutout:'40%',
  
  plugins: {
    legend: {
      position: 'bottom',
      display:false,
       // Set the legend position to bottom
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.label || '';
          const value = context.parsed || 0;
          return `${label}: ${value}%`;
        },
      },
    },
  },
};

export default function ChartD() {
  return (
  <div>
    <Doughnut data={data} options={options}/>
    </div>
  )
}