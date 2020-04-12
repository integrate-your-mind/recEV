import { createStore, compose } from 'redux';
// import { rootReducers } from './reducers';

const composeEnhancer =
  //@ts-ignore
  (process.env.NODE_ENV !== 'production' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// export const store = createStore(rootReducers, {}, composeEnhancer);
