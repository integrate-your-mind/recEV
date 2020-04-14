import { combineReducers } from 'redux';
import { charityCollectionReducer, CharityCollectionState } from './charity/charityCollection.reducer';

export interface State {
  charityCollection: CharityCollectionState;
}

export const rootReducer = combineReducers<State>({
  charityCollection: charityCollectionReducer,
});
