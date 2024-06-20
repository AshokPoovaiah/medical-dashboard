import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import ChartComponent from "./Chart";
import PieChart from "./PieChart";
import Table from "./Table";
import mockData from "../data";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="dashboard-container">
        <h1>Welcome, {mockData.user.name}</h1>
        <div className="charts-wrapper">
          <div className="chart-section">
            <ChartComponent data={mockData.chartData} />
          </div>
          <div className="chart-section">
            <PieChart data={mockData.pieChartData} />
          </div>
        </div>
        <div className="table-section">
          <Table insights={mockData.insights} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
