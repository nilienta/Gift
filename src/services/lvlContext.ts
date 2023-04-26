import React from 'react';

type TLevel = {
  level: number;
};

type TLvlContext = [TLevel, React.Dispatch<React.SetStateAction<TLevel>>];

const defaultState = {
  level: 1,
};

export const LvlContext = React.createContext<TLvlContext>([
  defaultState,
  () => null,
]);
