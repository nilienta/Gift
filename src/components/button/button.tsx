import React from 'react';
import { TButton } from '../../services/types';
import styles from './button.module.scss';

export const Button: React.FC<TButton> = ({
  htmlType,
  type = 'primary',
  onClick,
  children,
  ...rest
}) => {
  if (type === 'secondary') {
    return (
      <button
        type={htmlType}
        onClick={onClick}
        className={`${styles.button} ${styles['button--secondary']}`}
        {...rest}
      >
        {children}
      </button>
    );
  }

  return (
    <div className={styles.button__wrap}>
      <button
        type={htmlType}
        onClick={onClick}
        className={`${styles.button} ${styles['button--primary']}`}
        {...rest}
      >
        {children}
      </button>
      <div className={styles.button__shadow}></div>
    </div>
  );
};
