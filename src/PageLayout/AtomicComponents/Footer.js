import React from "react";

const Footer = ({
  text,
  FooterClassName,
  FooterTextClassName,
  href,
  linkText,
  LinkClassName,
}) => {
  return (
    <div className={FooterClassName}>
      <label className={FooterTextClassName}>{text}</label>{" "}
      <a className={LinkClassName} href={href} target="_blank" rel="noreferrer">
        {linkText}
      </a>
    </div>
  );
};

export default Footer;
