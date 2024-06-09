import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

const AddExpenceForm = ({ budgets }) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
      <h2 className="h3">
        Add New <span className="accent">{budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}</span> Expence
      </h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="expence-inputs">
          <div className="grid-xs">
            <label htmlFor="newExpence"> Expence Name</label>
            <input type="text" name="newExpence" id="newExpence" placeholder="eg., Coffee" ref={focusRef} required />
          </div>
          <div className="grid-xs">
            <label htmlFor="newExpenceAmount">Amount</label>
            <input
              type="number"
              step="0.01"
              inputMode="decimal"
              name="newExpenceAmount"
              id="newExpenceAmount"
              placeholder="eg., 3.50"
              required
            />
          </div>
        </div>
        <div className="grid-xs " hidden={budgets.length === 1}>
          <label htmlFor="newExpenceBudget">Budget Category</label>
          <select name="newExpenceBudget" id="newExpenceBudget" required>
            {budgets
              .sort((a, b) => a.createdAt - b.createdAt)
              .map((budget) => {
                return (
                  <option key={budget.id} value={budget.id}>
                    {budget.name}
                  </option>
                );
              })}
          </select>
        </div>
        <input type="hidden" name="_action" value="createExpence" />
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Submiting...</span>
          ) : (
            <>
              <span>Add Expence</span>
              <PlusCircleIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddExpenceForm;
