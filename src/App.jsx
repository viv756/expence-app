import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
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
  return <RouterProvider router={router} />;
};

export default App;
