import {NumbersActions, NumbersActionTypes} from './numbers.actions';
import {NUMBERS_LENGTH} from '../constants';

export type NumbersState = {
  data: string[];
};

const initialState = {
  data: [],
};

export default (
  state: NumbersState = initialState,
  action: NumbersActions,
): NumbersState => {
  switch (action.type) {
    case NumbersActionTypes.NumbersChanged:
      return {...state, data: action.numbers};
    default:
      return state;
  }
};
