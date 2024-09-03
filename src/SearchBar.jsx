import React from "react";
import { ThemeContext } from "./ThemeContext";

const SearchBar = ({ onChangeTextValue, textValue, onChangeCheckboxValue, checkBoxValue }) => {
  const { toggleTheme } = React.useContext(ThemeContext);
  return (
    <div>
      <form className="mb-4 flex items-center">
        <input
          className="mr-2 px-2 py-1 border border-gray-300 rounded"
          type="text"
          placeholder="Buscar..."
          value={textValue}
          onChange={(e) => onChangeTextValue(e.target.value)}
        />
        <input
          className="mr-2 px-2 py-1 border border-gray-300 rounded"
          type="checkbox"
          checked={checkBoxValue}
          onChange={onChangeCheckboxValue}
        />
        <label>solo mostrar productos baratos</label>
        <button className="ml-5 px-4 py-2 bg-blue-500 text-white rounded" onClick={toggleTheme}>
          Cambiar tema
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
