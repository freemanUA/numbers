import {combineReducers} from 'redux';

import numbersReducer, {
  NumbersState,
} from '../features/numbers/store/numbers.reducer';

export interface IState {
  numbers: NumbersState;
}

export default combineReducers({
  numbers: numbersReducer,
});
