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
    <div className='field'>
      <label className='field__label'>{label}</label>
      <div>
        <input
          {...input}
          type={type}
          maxLength={maxLength}
          inputMode={inputMode}
        />
      </div>
      {touched && error && <span className='field__error'>{error}</span>}
    </div>
  );
};

export default renderField;
