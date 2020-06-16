import React from "react";
import "./form-input.style.scss";

const FormInput = ({ label, handlChange, ...otherItem }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handlChange} {...otherItem} />
      {label ? (
        <label
          className={`${
            otherItem.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;
