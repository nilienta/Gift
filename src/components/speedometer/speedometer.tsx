import React, { useState, useContext, useEffect } from 'react';
import Col from 'react-bootstrap/Col';

import { LvlContext } from '../../services/lvlContext';
import ellipse from '../../assets/img/ellipse.svg';
import ellipseBg from '../../assets/img/ellipse-bg.svg';
import indicator1 from '../../assets/img/indicator-1.svg';
import { LEVELS } from '../../constants';

import arrow from '../../assets/img/arrow.svg';

import styles from './speedometer.module.scss';

export const Speedometer: React.FC = () => {
  const [lvlState] = useContext(LvlContext);
  const level = lvlState.level;

  const [currentLevel, setCurrentLevel] = useState(indicator1);
  const [isMouseUp, setIsMouseUp] = useState(false);

  // setTimeout для имитации анимации
  useEffect(() => {
    setIsMouseUp(true);
    setTimeout(() => {
      setIsMouseUp(false);
      setCurrentLevel(
        LEVELS.find((lvl) => lvl.id === level)?.image || indicator1
      );
    }, 200);
  }, [level]);

  const indicatorClass = `${styles.speedometer__image} ${styles.indicator} ${
    isMouseUp ? styles[`indicator--dark`] : ''
  }`;
  const arrowClass = `${styles.speedometer__image} ${styles.arrow} ${
    styles[`arrow--${level}`]
  }`;
  const circleClass = `${styles.speedometer__image} ${styles.circle} ${
    styles[`circle--${level}`]
  }`;
  const ellipseClass = `${styles.speedometer__image} ${styles.ellipse}`;

  return (
    <Col xs={12} md={9} xl={4} className={styles.speedometer__wrap}>
      <div className={styles.speedometer}>
        <img
          src={ellipseBg}
          alt="Ellipse background"
          className={styles.speedometer__image}
          id="ellipse"
        />
        <img
          src={ellipse}
          alt="Ellipse"
          className={ellipseClass}
          id="ellipse"
        />
        <img
          src={currentLevel}
          alt="Indicator"
          className={indicatorClass}
          id="indicator"
        />
        <img src={arrow} alt="Arrow" className={arrowClass} id="arrow" />
        <div className={circleClass}></div>
      </div>
    </Col>
  );
};
