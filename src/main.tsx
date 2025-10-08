import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "../components/Home";
import Shop from "../components/Shop.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // The App component is the layout/shell
    children: [
      // These children will render inside App's <Outlet />
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root")!);
root.render(<RouterProvider router={router} />);
