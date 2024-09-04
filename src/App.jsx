import "./App.css";
import ProductForm from "./ProductForm";
import "./index.css";
import { ThemeProvider } from "./ThemeContext";
import Layout from "./Layout";
import FilterableProductTable from "./ProductList/FilterableProductTable";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductItem from "./ProductItem";
import { action as productAction, loader as productsLoader } from "./Layout";
import { loader as clientLoader } from "./ProductItem";
import { action as formAction } from "./ProductForm";
async function productLoader() {
  const response = await fetch("https://dummyjson.com/products/category/smartphones");
  const data = await response.json();
  return data.products;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // Loader y action son funciones que traen o escriben datos
    loader: productsLoader,
    action: productAction,
    children: [
      {
        path: "/products",
        loader: productLoader,
        element: (
          <ThemeProvider>
            <FilterableProductTable />
          </ThemeProvider>
        ),
      },
      {
        path: "product/:productId",
        loader: clientLoader,
        element: <ProductItem />,
      },
      {
        path: "/product/:productId/edit",
        element: <ProductForm />,
        loader: clientLoader,
        action: formAction,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <Layout>
          <ThemeProvider>
            <FilterableProductTable />
          </ThemeProvider>
        </Layout>
      </RouterProvider>
    </div>
  );
}

export default App;
