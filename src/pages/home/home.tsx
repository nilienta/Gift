import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { THome } from '../../services/types';
import { TEXT_CONTENT } from '../../constants';
import { Speedometer } from '../../components/speedometer/speedometer';
import { Levels } from '../../components/list-level/levels';
import { Button } from '../../components/button/button';
import { TextBlock } from '../../components/text-block/text-block';

import styles from './home.module.scss';

export const Home: React.FC<THome> = ({ onClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  // TODO возможно нужен дебаунс
  useEffect(() => {
    setIsMobile(document.documentElement.clientWidth <= 768);
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const checkIsMobile = () => {
    setIsMobile(document.documentElement.clientWidth <= 768);
  };

  if (isMobile) {
    return (
      <Container>
        <Col>
          <TextBlock text={TEXT_CONTENT.home} />
          <Levels />
          <Speedometer />
          <Button htmlType="button" onClick={onClick}>
            GO
          </Button>
        </Col>
      </Container>
    );
  }

  return (
    <Container>
      <Row className={styles.row}>
        <Col lg={12} xl={6}>
          <TextBlock text={TEXT_CONTENT.home} />
          <Button htmlType="button" onClick={onClick}>
            Go
          </Button>
        </Col>
        <Speedometer />
        <Levels />
      </Row>
    </Container>
  );
};
