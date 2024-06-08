import { useLoaderData } from "react-router-dom";
// components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";
// helper functions
import { createBudget, fetchdata, waait } from "../helpers";
// Library
import { toast } from "react-toastify";

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
            {/* {budjets}?():()*/}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
