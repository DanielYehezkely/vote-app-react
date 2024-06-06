import React from "react";

import './InputField.css'

const InputField = ({name,label,type,error}) => {
  return (

    <div>
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        placeholder={`Enter ${label} here`}
      />
      <div className="error-message">{error}</div>
    </div>
  )
};

export default InputField;
