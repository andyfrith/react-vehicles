import * as types from '../actions/actionTypes';

const selectedVehicleReducer = ( state = {}, action ) => {
  switch ( action.type ) {
    case types.SELECT_VEHICLE:
      return action.vehicle;
    default:
      return state;
  }
};

export default selectedVehicleReducer;
