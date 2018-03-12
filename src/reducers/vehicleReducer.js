import * as types from '../actions/actionTypes';

const initialState = {
  vehicles: [],
  isFetching: false,
  error: '',
};

const vehicleReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case types.LOADING_VEHICLES:
      return {
        ...state,
        vehicles: [],
        isFetching: true,
      };
    case types.LOAD_VEHICLES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        vehicles: action.vehicles,
      };
    case types.LOAD_VEHICLES_FAILURE:
      return {
        ...state,
        isFetching: false,
        vehicles: [],
        error: action.error,
      };
    // return Object.assign( [], state, action.vehicles );

    default:
      return state;
  }
};

export default vehicleReducer;
