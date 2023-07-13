import React from "react";

const Button = ({ text, onClick, ButtonClassName }) => {
  return (
    <button className={ButtonClassName} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
