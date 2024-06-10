import React from "react";
import ExpenceItem from "./ExpenceItem";

const Table = ({ expences }) => {

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date"].map((i, index) => (
              <th key={index}> {i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expences.map((expence) => (
            <tr key={expence.id}>
              <ExpenceItem expence={expence} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
