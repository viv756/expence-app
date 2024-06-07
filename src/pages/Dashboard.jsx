import { useLoaderData } from "react-router-dom";

// helper functions
import { fetchdata } from "../helpers";

// Loader
export function dashboardLoader() {
  const userName = fetchdata("userName");
  return { userName };
}
const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <div>
      <h1>{userName}</h1>
      Dashboard
    </div>
  );
};

export default Dashboard;
