import React from "react";
import "./Table.css";

const Table = ({ insights }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {insights.map((insight) => (
            <tr key={insight.id}>
              <td>{insight.date}</td>
              <td>{insight.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
