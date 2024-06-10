import React from "react";
import { formatCurrency, formatDateToLocaleString } from "../helpers";

const ExpenceItem = ({ expence }) => {
  return (
    <>
      <td>{expence.name}</td>
      <td>{formatCurrency(expence.amount)}</td>
      <td>{ formatDateToLocaleString(expence.createdAt)}</td>
    </>
  );
};

export default ExpenceItem;
