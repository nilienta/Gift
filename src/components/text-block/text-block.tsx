import React from 'react';
import { TTextBlock } from '../../services/types';
import styles from './text-block.module.scss';

export const TextBlock: React.FC<TTextBlock> = ({ text, page, ...rest }) => {
  const titleClass = `${styles.title} ${styles[`title--${page}`]}`;
  const paragraphClass = `${styles.paragraph} ${styles[`paragraph--${page}`]}`;

  return (
    <>
      <h1 className={titleClass}>{text.title}</h1>
      <p className={paragraphClass}>{text.paragraph}</p>
    </>
  );
};
