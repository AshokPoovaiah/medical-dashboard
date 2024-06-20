const mockData = {
    user: {
      name: "John Doe",
    },
    insights: [
      { id: 1, date: "2024-06-01", value: 85 },
      { id: 2, date: "2024-06-02", value: 90 },
      { id: 3, date: "2024-06-03", value: 78 },
      // Add more data as needed to test scrolling
    ],
    chartData: {
      labels: ["June 1", "June 2", "June 3"],
      datasets: [
        {
          label: "Health Score",
          data: [85, 90, 78],
          backgroundColor: "rgba(75,192,192,0.6)",
        },
      ],
    },
    pieChartData: {
      labels: ["85", "90", "78"],
      datasets: [
        {
          label: "Health Score Distribution",
          data: [85, 90, 78],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
  };
  
  export default mockData;
  