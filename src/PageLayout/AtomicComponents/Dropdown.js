import React from "react";

const Dropdown = ({ options, value, onChange, DropdownClassName }) => {
  return (
    <select className={DropdownClassName} value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
