import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, ...rest }) => {
  return (
    <div className="field">
      {label && <label className="field__label">{label}</label>}
      <input className="field__input" {...rest} />
      {error && <span className="field__error">{error}</span>}
    </div>
  );
};
