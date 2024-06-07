import { Outlet, useLoaderData } from "react-router-dom";

// helper functions
import { fetchdata } from "../helpers";

// Loader
export function mainLoader() {
  const userName = fetchdata("userName");
  return { userName };
}
const Main = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Main;
