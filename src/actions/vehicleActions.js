import v4 from 'node-uuid';
import _ from 'lodash';
import * as types from './actionTypes';
// import vehiclesAPI from '../api/VehiclesAPI';

export const ensureUniqueItems = cars => _.uniqWith( cars, _.isEqual );
export const enhanceItemsWithId = cars =>
  _.map( cars, car => _.extend( { id: v4() }, car ) );

export const loadVehicles = () => ( {
  type: types.LOADING_VEHICLES,
} );

export const selectVehicle = vehicle => ( {
  type: types.SELECT_VEHICLE,
  vehicle,
} );
