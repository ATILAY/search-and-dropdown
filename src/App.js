//WHAT TASKS ARE DONE ? --> 1,2,3,4,5,6 and 8 (pick any = 8)

import "./styles.css";

import React, { useState } from "react";

function App({ data }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [validationMessage, setValidationMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    setInputValue(value);

    if (value.trim()) {
      const isAlphaNumeric = /^[a-z0-9]+$/i.test(value);

      if (!isAlphaNumeric) {
        setValidationMessage("Please use only letters and numbers");

        setFilteredData([]);

        return;
      }

      const tempFilteredData = data.filter((item) =>
        item.toLowerCase().startsWith(value.toLowerCase())
      );

      if (tempFilteredData.length === 0) {
        setValidationMessage("No match found");
      } else {
        setValidationMessage("");
        setFilteredData([]);
      }

      setFilteredData(tempFilteredData);
    } else {
      setFilteredData([]);
    }
  };

  const handleItemClick = (item) => {
    setInputValue(item);
    setFilteredData([]);
    setValidationMessage("");
  };

  const highlightMatch = (item, query) => {
    const index = item.toLowerCase().indexOf(query.toLowerCase());

    if (index === -1) return item;

    return (
      <>
        <strong>{item.substring(index, index + query.length)}</strong>
        {item.substring(index + query.length)}
      </>
    );
  };

  return (
    <div className="app-wrapper">
      {validationMessage && inputValue.length > 0 && (
        <div className="validation-message">{validationMessage}</div>
      )}
      <input type="text" value={inputValue} onChange={(e) => handleChange(e)} />
      {filteredData.length > 0 && (
        <ul>
          {filteredData.map((item, index) => {
            return (
              <li
                className="found-items"
                key={index}
                onClick={() => handleItemClick(item)}
              >
                {highlightMatch(item, inputValue)}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
