import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import styles from './slider.module.scss';

export const Slider: React.FC = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleOnClickPlus = () => {
    setCount(count + 120);
    setStep(step + 1);
  };
  const handleOnClickMinus = () => {
    setCount(count - 120);
    setStep(step - 1);
  };
  const getItemClass = () => {
    if (step === 4) {
      setStep(1);
      return `${styles.item} ${styles.active1}`;
    }
    if (step === 0) {
      setStep(3);
      return `${styles.item} ${styles.active3}`;
    }
    return `${styles.item} ${styles[`active${step}`]}`;
  };

  return (
    <Col xs={12} md={6} xl={6} className={styles['speedometer__wrap']}>
      <div className={styles.slider}>
        <div
          className={getItemClass()}
          style={{ transform: `rotate(${0 + count}deg)` }}
        ></div>
        <div
          className={getItemClass()}
          style={{ transform: `rotate(${120 + count}deg)` }}
        ></div>
        <div
          className={getItemClass()}
          style={{ transform: `rotate(${240 + count}deg)` }}
        ></div>
        <div className={styles.btn__wrap}>
          <button onClick={handleOnClickPlus} className={styles.btn}></button>
          <button
            onClick={handleOnClickMinus}
            className={`${styles.btn} ${styles['btn--rotate']}`}
          ></button>
        </div>
      </div>
    </Col>
  );
};
