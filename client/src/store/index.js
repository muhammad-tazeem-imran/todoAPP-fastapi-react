import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';

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
