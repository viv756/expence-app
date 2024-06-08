import { useLoaderData } from "react-router-dom";

// helper functions
import { fetchdata } from "../helpers";
import Intro from "../components/Intro";

// Loader
export function dashboardLoader() {
  const userName = fetchdata("userName");
  return { userName };
}
const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <>
      {userName ? (<p>{userName}</p>) : <Intro />}
    </>
  )
};

export default Dashboard;
