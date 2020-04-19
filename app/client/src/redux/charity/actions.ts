import ICharityItem from '../../models/business/charity';
import {
  ICharityState,
  GET_CHARITY_START,
  GET_CHARITY_SUCCESS,
  GET_CHARITY_FAILURE,
  CharityActionTypes,
} from './types';

//This function will eventually take in the geo-location of the user
export function getCharityStart(): CharityActionTypes {
  return {
    type: GET_CHARITY_START,
    payload: null,
  };
}

export function getCharitySuccess(charities: ICharityItem[]): CharityActionTypes {
  return {
    type: GET_CHARITY_SUCCESS,
    payload: charities,
  };
}

export function getCharityFailure(error: Error): CharityActionTypes {
  return {
    type: GET_CHARITY_FAILURE,
    payload: error,
  };
}
