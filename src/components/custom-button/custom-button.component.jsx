import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ children, ...otheritems }) => {
  return (
    <button className="custom-button" {...otheritems}>
      {children}
    </button>
  );
};

export default CustomButton;
