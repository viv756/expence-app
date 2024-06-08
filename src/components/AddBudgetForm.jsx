import { Form } from "react-router-dom";
// library
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

const AddBudjetForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <Form method="post" className="grid-sm">
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input type="text" name="newBudget" id="newBudget" placeholder="eg., Groceries" required />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Amount</label>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmouont"
            id="newBudgetAmount"
            placeholder="eg., $350"
            required
            inputMode="decimal"
          />
        </div>
        <button type="submit" className="btn btn--dark">
          <span>Create Budget</span>
          <CurrencyDollarIcon width={20} />
        </button>
      </Form>
    </div>
  );
};

export default AddBudjetForm;
