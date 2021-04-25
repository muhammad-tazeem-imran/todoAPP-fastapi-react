import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './sagas';

const composeEnhancers = (
  process.env.NODE_ENV !== 'production'
    && typeof window !== 'undefined'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
