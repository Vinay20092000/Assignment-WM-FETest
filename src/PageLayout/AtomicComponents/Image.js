import React from "react";

const Image = ({ src, height, width, alt, ImageClassName }) => {
  return (
    <>
      <img
        className={ImageClassName}
        src={src}
        height={height}
        width={width}
        alt={alt}
      />
    </>
  );
};

export default Image;
