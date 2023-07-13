import React from "react";

const Text = ({ text, TextClassName }) => {
  return <label className={TextClassName}>{text}</label>;
};

export default Text;
