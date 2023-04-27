import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { TGift } from '../../services/types';
import { TextBlock } from '../../components/text-block/text-block';
import { TEXT_CONTENT } from '../../constants';
import { Button } from '../../components/button/button';
import { Slider } from '../../components/slider/slider';

import styles from './gift.module.scss';

export const Gift: React.FC<TGift> = ({ onClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  // TODO возможно нужен дебаунс
  useEffect(() => {
    setIsMobile(document.documentElement.clientWidth < 768);
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const checkIsMobile = () => {
    setIsMobile(document.documentElement.clientWidth < 768);
  };

  const colClass = `${styles.col} ${styles['col--mobile']}`;
  if (isMobile) {
    return (
      <>
        <Container>
          <Col style={{ overflow: 'hidden' }} className={colClass}>
            <TextBlock text={TEXT_CONTENT.gift} page="gift" />
            <Slider />
            <Button htmlType="button" type="secondary" onClick={onClick}>
              Back
            </Button>
          </Col>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <Row className={styles.row}>
          <Col xs={12} md={6} xl={6} className={styles.col}>
            <TextBlock text={TEXT_CONTENT.gift} page="gift" />
            <Button htmlType="button" type="secondary" onClick={onClick}>
              Back
            </Button>
          </Col>
          <Slider />
        </Row>
      </Container>
    </>
  );
};
