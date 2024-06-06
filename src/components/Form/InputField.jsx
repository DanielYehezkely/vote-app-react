import React from "react";

import './InputField.css'

const InputField = ({name,label,type,error,onChange}) => {
  return (

    <div>
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        placeholder={`Enter ${label} here`}
        name={name}
        onChange={onChange}
        className={error ? 'error' : ''}
      />
      <div className="error-message">{error}</div>
    </div>
  )
};

export default InputField;
