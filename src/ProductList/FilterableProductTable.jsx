import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import ProductTable from "../ProductTable";
import { useLoaderData } from "react-router-dom";

function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [filterExpensive, setFilterExpensive] = useState(false);
  const products = useLoaderData();

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

export default FilterableProductTable;
