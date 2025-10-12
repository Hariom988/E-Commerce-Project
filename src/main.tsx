import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "../components/Home";
import Shop from "../components/Shop";
import About from "../components/about";
import ProductDetail from "../components/productDetail";
import Contact from "../components/contact";
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
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root")!);
root.render(<RouterProvider router={router} />);
