import { Outlet, useLoaderData } from "react-router-dom";

// assets
import wave from "../assets/wave.svg";
// helper functions
import { fetchdata } from "../helpers";
// components
import Nav from "../components/Nav";

// Loader
export function mainLoader() {
  const userName = fetchdata("userName");
  return { userName };
}
const Main = () => {
  const {userName} = useLoaderData()
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="wave" />
    </div>
  );
};

export default Main;
