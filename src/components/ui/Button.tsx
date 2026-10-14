import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  ...rest
}) => {
  return (
    <button className={`btn btn--${variant}`} {...rest}>
      {children}
    </button>
  );
};
