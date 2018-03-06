import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const configureStore = () => {
  const middlewares = [];
  middlewares.push( thunk );

  if ( process.env.NODE_ENV === 'development' ) {
    // eslint-disable-next-line global-require
    const { logger } = require( 'redux-logger' );

    middlewares.push( logger );
  }

  const store = createStore( reducers, {}, applyMiddleware( ...middlewares ) );
  return store;
};

export default configureStore;
