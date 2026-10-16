import React from 'react';
import './Button.css';

const Button = ({ text, onClick, variant = 'primary', disabled = false }) => {
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger',
  };

  return (
    <button
      className={`btn ${variantClasses[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;