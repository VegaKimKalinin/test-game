import React from 'react';
import './renderField.scss';

const renderField = (props) => {
  const {
    input,
    label,
    type,
    maxLength,
    inputMode,
    meta: { touched, error },
  } = props;
  return (
    <div className='form-field'>
      <label>{label}</label>
      <div>
        <input
          {...input}
          type={type}
          maxLength={maxLength}
          inputMode={inputMode}
        />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};

export default renderField;
