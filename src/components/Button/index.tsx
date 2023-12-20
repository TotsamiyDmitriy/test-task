import React from 'react';
import styles from './button.module.scss';

interface IButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: string;
  disabled?: boolean;
}

const Button: React.FC<IButton> = ({ onClick, className = '', children, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className && className}`}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
