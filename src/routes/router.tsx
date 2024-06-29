import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllProducts from "../page/products/AllProducts";
import ProductDetails from "../page/productDetails/ProductDetails";
import UpdateProduct from "../page/updateProduct/UpdateProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllProducts />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/products/update/:id",
        element: <UpdateProduct />,
      },
    ],
  },
]);
