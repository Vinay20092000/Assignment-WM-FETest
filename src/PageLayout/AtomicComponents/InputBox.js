import React from "react";

const InputBox = ({ type, placeholder, value, onChange, InputClassName }) => {
  return (
    <input
      className={InputClassName}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputBox;
