import { combineReducers } from 'redux';
import { charityReducer } from './charity/charityReducer';
import { ICharityState } from './charity/types';

export interface IState {
  charities: ICharityState;
}

export const rootReducer = combineReducers<IState>({
  charities: charityReducer,
});
