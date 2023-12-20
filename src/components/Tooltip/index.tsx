import React from 'react';
import styles from './tooltip.module.scss';
interface TooltipProps {
  children: React.ReactNode;
  className: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, className }) => {
  return (
    <a className={`${styles.tooltip} ${className && className}`}>
      {children}
      <p className={styles.tooltiptext}>{children}</p>
    </a>
  );
};

export default Tooltip;
