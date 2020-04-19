import { ICharityState, CharityActionTypes, GET_CHARITY_SUCCESS } from './types';

const initialState: ICharityState = {
  charities: [],
};

export function charityReducer(state = initialState, action: CharityActionTypes): ICharityState {
  switch (action.type) {
    case GET_CHARITY_SUCCESS:
      return {
        //eslint-disable-next-line
        //@ts-ignore
        charities: [...state, action.payload],
      };
    default:
      return state;
  }
}
