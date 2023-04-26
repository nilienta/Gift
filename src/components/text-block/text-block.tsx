import React from 'react';
import Col from 'react-bootstrap/Col';
import { TTextBlock } from '../../services/types';
import styles from './text-block.module.scss';

export const TextBlock: React.FC<TTextBlock> = ({ text, ...rest }) => {
  return (
    <Col {...rest}>
      <h1 className={styles.title}>{text.title}</h1>
      <p className={styles.paragraph}>{text.paragraph}</p>
    </Col>
  );
};
