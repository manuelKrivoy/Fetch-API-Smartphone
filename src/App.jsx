import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import "./index.css";
import { ThemeProvider } from "./ThemeContext";

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [filterExpensive, setFilterExpensive] = useState(false);
  return (
    <>
      <SearchBar
        onChangeTextValue={setFilterText}
        textValue={filterText}
        onChangeCheckboxValue={(value) => setFilterExpensive(value.target.checked)}
        checkBoxValue={filterExpensive}
      ></SearchBar>
      <ProductTable products={products} filterText={filterText} filterExpensive={filterExpensive}></ProductTable>
    </>
  );
}

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => {
        console.log("error");
      });
  }, []);

  console.log(products);

  return (
    <div>
      <ThemeProvider>
        <FilterableProductTable products={products} />
      </ThemeProvider>
    </div>
  );
}

export default App;
