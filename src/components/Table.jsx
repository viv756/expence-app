import React from "react";
import ExpenceItem from "./ExpenceItem";

const Table = ({ expences,showBudget = true }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date",showBudget ? "Budget":"", ""].map((i, index) => (
              <th key={index}> {i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expences.map((expence) => (
            <tr key={expence.id}>
              <ExpenceItem expence={expence} showBudget={showBudget } />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
