import { useLoaderData } from "react-router-dom";
import { createExpence, deleteItem, getAllMatchingItems } from "../helpers";
import BudgetItem from "../components/BudgetItem";
import AddExpenceForm from "../components/AddExpenceForm";
import Table from "../components/Table";
import { toast } from "react-toastify";

export async function budgetLoader({ params }) {
  const budget = await getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: params.id,
  })[0];

  const expences = await getAllMatchingItems({
    category: "expences",
    key: "budgetId",
    value: params.id,
  });

  if (!budget) {
    throw new Error("The budget you're trying to find doesn't exist");
  }
  return { budget, expences };
}

export async function budgetAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "createExpence") {
    try {
      createExpence({ name: values.newExpence, amount: values.newExpenceAmount, budgetId: values.newExpenceBudget });
      return toast.success(`Expence ${values.newExpence} created`);
    } catch (error) {
      throw new Error("There was a problem creating your expence.");
    }
  }

  if (_action === "deleteExpence") {
    try {
      deleteItem({
        key: "expences",
        id: values.expenceId,
      });
      return toast.success("Expence deleted!");
    } catch (error) {
      throw new Error("There was a problem deleting your expence.");
    }
  }
}

const BudgetPage = () => {
  const { budget, expences } = useLoaderData();

  return (
    <div className="grid-lg" style={{ "--accent": budget.color }}>
      <h1 className="h2">
        <span className="accent">{budget.name} Overview</span>
      </h1>
      <div className="flex-lg">
        <BudgetItem budget={budget} />
        <AddExpenceForm budgets={[budget]} />
      </div>
      {expences && expences.length > 0 && (
        <div className="grid-md">
          <h2>
            <span className="accent">{budget.name}</span>
          </h2>
          <Table expences={expences} showBudget={false} />
        </div>
      )}
    </div>
  );
};

export default BudgetPage;
