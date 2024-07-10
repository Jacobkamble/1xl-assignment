import { createBrowserRouter, RouteObject } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";

const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
