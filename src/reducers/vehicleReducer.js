import * as types from '../actions/actionTypes';

const vehicleReducer = ( state = [], action ) => {
  switch ( action.type ) {
    case types.LOAD_VEHICLES_SUCCESS:
      return Object.assign( [], state, action.vehicles );

    default:
      return state;
  }
};

export default vehicleReducer;
