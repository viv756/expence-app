import { useLoaderData } from "react-router-dom";
// components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";
// helper functions
import { createBudget, createExpence, fetchdata, waait } from "../helpers";
// Library
import { toast } from "react-toastify";
import AddExpenceForm from "../components/AddExpenceForm";

// Loader
export function dashboardLoader() {
  const userName = fetchdata("userName");
  const budgets = fetchdata("budgets");

  return { userName, budgets };
}

// action
export async function dashboardAction({ request }) {
  await waait();
  const data = await request.formData();
  // const userName = data.get("userName")
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (e) {
      throw new Error("There was a problem creating your account");
    }
  }

  if (_action === "createBudget") {
    try {
      createBudget({ name: values.newBudget, amount: values.newBudgetAmount });
      return toast.success("Budget created");
    } catch (error) {
      throw new Error("There was a problem creating your budget.");
    }
  }

  if (_action === "createExpence") {
    try {
      createExpence({name:values.newExpence,amount:values.newExpenceAmount,budgetId:values.newExpenceBudget})
      return toast.success(`Expence ${values.newExpence} created`);
    } catch (error) {
      throw new Error("There was a problem creating your expence.");
    }
  }
}
const Dashboard = () => {
  const { userName, budgets } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back,<span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {budgets && budgets.length > 0 ? (
              <>
                {" "}
                <div className="grid-lg">
                  <div className="flex-lg">
                    <AddBudgetForm />
                    <AddExpenceForm budgets={ budgets }/>
                  </div>
                </div>
              </>
            ) : (
              <>
                {" "}
                <div className="grid-sm">
                  <p>personal budgeting is the secret to financial freedom.</p>
                  <p>Create a budget to get started!</p>
                  </div>
                  <AddBudgetForm />
              </>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
