import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleSignIn, invert, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
        invert ? "invert" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
