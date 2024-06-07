import { Outlet, useLoaderData } from "react-router-dom";

// assets
import wave from "../assets/wave.svg"
// helper functions
import { fetchdata } from "../helpers";

// Loader
export function mainLoader() {
  const userName = fetchdata("userName");
  return { userName };
}
const Main = () => {
  return (
    <div className="layout">
      <h1> Main</h1>
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="wave" />
    </div>
  );
};

export default Main;
