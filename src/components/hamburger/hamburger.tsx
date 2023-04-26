import React from 'react';
import { MENU } from '../../constants';
import { slide as Menu } from 'react-burger-menu';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

import styles from './hamburger.module.scss';
import { Link } from 'react-router-dom';

const style = {
  bmBurgerButton: {
    position: 'absolute',
    width: '33px',
    height: '22px',
    left: 'calc(var(--bs-gutter-x) * .5)',
    top: '50px',
  },
  bmBurgerBars: {
    background: '#FFFFFF',
    height: '15%',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '25px',
    width: '25px',
    right: '20px',
    top: '23px',
  },
  bmCross: {
    background: '#FFFFFF',
    width: '2.5px',
    height: '25px',
  },
  bmMenuWrap: {
    position: 'fixed',
    left: '0',
    height: '100%',
    width: '375px',
  },
  bmMenu: {
    background: '#090909',
    padding: '0px 70px',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0em',
  },
  bmItem: {
    display: 'flex',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    left: '0',
  },
};

export const Hamburger: React.FC = () => {
  return (
    <Container className={styles['menu__wrap']}>
      <Menu pageWrapId={'wrap'} styles={style}>
        <Col className={styles.menu}>
          {MENU.map((item) => (
            <div className={styles.menu__item} key={item.id}>
              <div className={styles.menu__button}>
                <Link to={item.to} className={styles.menu__link}>
                  {item.label}
                </Link>
              </div>
              <div className={styles.menu__subtile}>GO</div>
            </div>
          ))}
          <a
            id="contact"
            className={styles.menu__link}
            href="tel:8-800-000-0-000"
          >
            8 800 000 00 00
          </a>
        </Col>
      </Menu>
    </Container>
  );
};
