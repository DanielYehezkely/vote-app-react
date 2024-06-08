import React from "react";

import './InputField.css';

const InputField = ({ id, name, label, type, error, onChange }) => {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={`Enter ${label} here`}
        onChange={onChange}
        className={error ? 'error' : ''}
      />
      <div className="error-message">{error}</div>
    </div>
  );
};

export default InputField;