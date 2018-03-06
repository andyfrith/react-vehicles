import v4 from 'node-uuid';
import _ from 'lodash';
import * as types from './actionTypes';
import vehiclesAPI from '../api/VehiclesAPI';

export const clean = ( cars ) => {
  const uniqueCars = _.uniqWith( cars, _.isEqual );
  return _.map( uniqueCars, car => _.extend( { id: v4() }, car ) );
};

export const loadVehiclesSuccess = vehicles => ( {
  type: types.LOAD_VEHICLES_SUCCESS,
  vehicles,
} );

export const loadVehiclesFailure = message => ( {
  type: types.LOAD_VEHICLES_FAILURE,
  isFetching: false,
  message,
} );

export const loadVehicles = () => dispatch =>
  vehiclesAPI
    .getAllVehicles()
    .then( ( vehicles ) => {
      const cleaned = clean( vehicles );
      dispatch( loadVehiclesSuccess( cleaned ) );
    } )
    .catch( ( error ) => {
      dispatch( loadVehiclesFailure( error ) );
      // throw error;
    } );

export const selectVehicle = vehicle => ( {
  type: types.SELECT_VEHICLE,
  vehicle,
} );
