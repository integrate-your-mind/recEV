import { createStore, compose } from 'redux';
import { rootReducer } from './rootReducer';

const composeEnhancer =
  //@eslint-no-implicit-any
  (process.env.NODE_ENV !== 'production' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, {}, composeEnhancer);
