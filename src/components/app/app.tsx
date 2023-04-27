import React, { useState } from 'react';

import { Home } from '../../pages/home/home';
import { Gift } from '../../pages/gift/gift';
import { LvlContext } from '../../services/lvlContext';

import styles from './app.module.scss';
import { WrapperWithWave } from '../wrapper/wrapper';
import { Hamburger } from '../hamburger/hamburger';

export const App: React.FC = () => {
  const lvlState = useState({ level: 1 });
  const [page, setPage] = useState(1);

  const handleOnClickHome = () => {
    setPage(2);
  };

  const handleOnClickGift = () => {
    setPage(1);
  };

  const style =
    page === 1 ? { transform: '' } : { transform: 'translateX(-50%)' };

  return (
    <LvlContext.Provider value={lvlState}>
      <Hamburger />
      <WrapperWithWave style={style}>
        <div className={styles.wrapper}>
          <Home onClick={handleOnClickHome} />
          <Gift onClick={handleOnClickGift} />
        </div>
      </WrapperWithWave>
    </LvlContext.Provider>
  );
};

export default App;
