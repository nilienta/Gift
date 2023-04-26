import React from 'react';
import { TWrapper } from '../../services/types';
import styles from './wrapper.module.scss';

// FIXME иногда блочит скролл волны

export const WrapperWithWave: React.FC<TWrapper> = ({ style, children }) => {
  return (
    <div className={styles.wrapper} style={style} id="wrap">
      <div className={`${styles.wave} ${styles['wave--up']}`} />
      {children}
      <div className={`${styles.wave} ${styles['wave--down']}`} />
    </div>
  );
};
