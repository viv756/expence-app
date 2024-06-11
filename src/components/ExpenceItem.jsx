import React from "react";
import { formatCurrency, formatDateToLocaleString, getAllMatchingItems } from "../helpers";
import { Link, useFetcher } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";

const ExpenceItem = ({ expence }) => {
  const fetcher = useFetcher();
  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expence.budgetId,
  })[0];

  return (
    <>
      <td>{expence.name}</td>
      <td>{formatCurrency(expence.amount)}</td>
      <td>{formatDateToLocaleString(expence.createdAt)}</td>
      <td>
        <Link to={`/budget/${budget.id}`} style={{ "--accent": budget.color }}>
          {budget.name}
        </Link>
      </td>
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpence" />
          <input type="hidden" name="expenceId" value={expence.id} />
          <button type="submit" className="btn btn--warning" aria-label={`Delete ${expence.name} expence`}>
            <TrashIcon width={20} />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
};

export default ExpenceItem;
