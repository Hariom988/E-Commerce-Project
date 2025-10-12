import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "../components/Home";
import Shop from "../components/Shop";
import ProductDetail from "../components/productDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product-details",
        element: <ProductDetail />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root")!);
root.render(<RouterProvider router={router} />);
