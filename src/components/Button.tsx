import React from 'react';
import '../scss/button.scss';

interface IButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: 'width-120';
  children?: string;
  disabled?: boolean;
}

const Button: React.FC<IButton> = ({ onClick, className, children, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${typeof className === 'undefined' ? '' : className}`}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
