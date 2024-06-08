import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
// library
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Layouts
import Main, { mainLoader } from "./layouts/Main";
// actions
import { logoutAction } from "./actions/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);
const App = () => {
  return <div className="App">
    <RouterProvider router={router} />
    <ToastContainer/>
  </div>
};

export default App;
