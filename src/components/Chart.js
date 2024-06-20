import React, { useRef, useEffect } from "react";
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, BarController } from "chart.js";
import { Bar } from "react-chartjs-2";

// Register the necessary components
Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, BarController);

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Health Score Over Time'
          }
        }
      }
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;
