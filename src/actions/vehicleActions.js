import v4 from 'node-uuid';
import _ from 'lodash';
import * as types from './actionTypes';
import vehiclesAPI from '../api/VehiclesAPI';

export const ensureUniqueItems = cars => _.uniqWith( cars, _.isEqual );
export const enhanceItemsWithId = cars =>
  _.map( cars, car => _.extend( { id: v4() }, car ) );

export const loadingVehicles = () => ( {
  type: types.LOADING_VEHICLES,
  isFetching: true,
} );

export const loadVehiclesSuccess = vehicles => ( {
  type: types.LOAD_VEHICLES_SUCCESS,
  vehicles,
} );

export const loadVehiclesFailure = message => ( {
  type: types.LOAD_VEHICLES_FAILURE,
  isFetching: false,
  error: message,
} );

export const loadVehicles = () => ( dispatch ) => {
  dispatch( loadingVehicles() );
  vehiclesAPI
    .getAllVehicles()
    .then( ( vehicles ) => {
      const ensured = ensureUniqueItems( vehicles );
      const cleaned = enhanceItemsWithId( ensured );
      dispatch( loadVehiclesSuccess( cleaned ) );
    } )
    .catch( ( error ) => {
      dispatch( loadVehiclesFailure( error.message ) );
      // throw error;
    } );
};

export const selectVehicle = vehicle => ( {
  type: types.SELECT_VEHICLE,
  vehicle,
} );
