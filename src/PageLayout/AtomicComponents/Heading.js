import React from "react";

const Heading = ({ text, HeadingClassName }) => {
  return <label className={HeadingClassName}>{text}</label>;
};

export default Heading;
