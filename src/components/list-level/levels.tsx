import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';

import { LvlContext } from '../../services/lvlContext';
import { LEVELS } from '../../constants';

import styles from './levels.module.scss';

export const Levels: React.FC = () => {
  const [lvlState, setLvl] = useContext(LvlContext);

  const getButtonClass = (id: number) => {
    return `${styles.button} ${styles[`button-${id}`]} ${
      lvlState.level === id ? styles[`button--active-${id}`] : ''
    }`;
  };

  return (
    <Col xs={12} md={3} xl={2} className={styles.list__wrap}>
      <ul className={styles.list}>
        {LEVELS.map(({ id, label }) => (
          <li key={id} className={styles.list__item}>
            <button
              className={getButtonClass(id)}
              onClick={() => setLvl({ level: id })}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </Col>
  );
};
