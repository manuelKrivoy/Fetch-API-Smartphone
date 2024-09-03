import React from "react";
import { ThemeContext } from "./ThemeContext";

const ProductTable = ({ products, filterText, filterExpensive }) => {
  const rows = [];
  const { theme } = React.useContext(ThemeContext);
  let lastBrand = null;
  products.forEach((product) => {
    if (product.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (filterExpensive && product.price > 500) {
      return;
    }
    if (product.brand !== lastBrand) {
      rows.push(
        <tr className="bg-gray-400" key={product.brand}>
          <td colSpan="4" className="text-center font-bold">
            {product.brand}
          </td>
        </tr>
      );
    }
    rows.push(
      <tr key={product.title} className={theme === "dark" ? "bg-blue-950 text-white" : "bg-white text-black"}>
        <td className="px-4 py-2">{product.title}</td>
        <td className="px-4 py-2">{product.description}</td>
        <td className="px-4 py-2">{product.price}</td>
        <td className="px-4 py-2">
          <img className="w-12 h-12" src={product.thumbnail} alt={product.title} />
        </td>
      </tr>
    );
    lastBrand = product.brand;
  });
  return (
    <div>
      <table className="w-full border-collapse border border-gray-400 mt-4">
        <thead className={theme === "dark" ? "bg-blue-950 text-white" : "bg-white text-black"}>
          <tr className="bg-grey-200">
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Descripcion</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Imagen</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default ProductTable;
