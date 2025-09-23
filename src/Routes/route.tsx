import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/login";

import AdminLayout from "../layouts/adminlayouts";
import Register from "../Auth/register";
import Overview from "../Admin/overview";

export const MainRoute = createBrowserRouter([
  {
    path: "",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Register />,
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
    ],
  },
]);
