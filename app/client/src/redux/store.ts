import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { rootSaga } from './sagas;
import { rootReducer } from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = composeWithDevTools({});

export const store = createStore(rootReducer, {}, composeEnhancer(applyMiddleware(sagaMiddleware)));

// sagaMiddleware.run(rootSaga);
