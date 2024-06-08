import { useLoaderData } from "react-router-dom";
// components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";
// helper functions
import { fetchdata } from "../helpers";
// Library
import { toast } from "react-toastify";


// Loader
export function dashboardLoader() {
  const userName = fetchdata("userName");
  const budjets = fetchdata("budgets");

  return { userName, budjets };
}

// action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  // const userName = data.get("userName")
  const formData = Object.fromEntries(data);

  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome, ${formData.userName}`);
  } catch (e) {
    throw new Error("There was a problem creating your account");
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
