import {Action} from 'redux';

import {NUMBERS_LENGTH} from '../constants';

export enum NumbersActionTypes {
  NumbersChanged = '[Numbers] Numbers changed',
}

export interface NumbersChanged extends Action {
  type: typeof NumbersActionTypes.NumbersChanged;
  numbers: string[];
}

export type NumbersActions = NumbersChanged;

const generateNumbers = () => {
  const numbers = [...Array(NUMBERS_LENGTH)].map(() =>
    Math.floor(Math.random() * 10).toString(),
  );

  return {
    type: NumbersActionTypes.NumbersChanged,
    numbers,
  };
};

export {generateNumbers};
