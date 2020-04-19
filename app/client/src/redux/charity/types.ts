import ICharityItem from '../../models/business/charity';

// Defining the type for the state of the charities the application is using
export interface ICharityState {
  charities: ICharityItem[];
}

//Defining our types for actions
export const GET_CHARITY_START = 'GET_CHARITY_START';
export const GET_CHARITY_SUCCESS = 'GET_CHARITY_SUCCESS';
export const GET_CHARITY_FAILURE = 'GET_CHARITY_FAILURE';

// Defing our action types
interface IGetCharityStartAction {
  type: typeof GET_CHARITY_START;
  payload: null;
}

interface IGetCharitySuccessAction {
  type: typeof GET_CHARITY_SUCCESS;
  payload: ICharityItem[];
}

interface IGetCharityFailureAction {
  type: typeof GET_CHARITY_FAILURE;
  payload: Error;
}

export type CharityActionTypes = IGetCharityStartAction | IGetCharityFailureAction | IGetCharitySuccessAction;
