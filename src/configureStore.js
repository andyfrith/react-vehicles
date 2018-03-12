import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import vehiclesSaga from './sagas/vehiclesSaga';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middlewares = [];
  middlewares.push( sagaMiddleware );

  if ( process.env.NODE_ENV === 'development' ) {
    // eslint-disable-next-line global-require
    const { logger } = require( 'redux-logger' );

    middlewares.push( logger );
  }

  const store = createStore( reducers, {}, applyMiddleware( ...middlewares ) );
  sagaMiddleware.run( vehiclesSaga );
  return store;
};

export default configureStore;
