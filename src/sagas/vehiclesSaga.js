import v4 from 'node-uuid';
import _ from 'lodash';
import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import vehiclesAPI from '../api/VehiclesAPI';

export const ensureUniqueItems = cars => _.uniqWith( cars, _.isEqual );
export const enhanceItemsWithId = cars =>
  _.map( cars, car => _.extend( { id: v4() }, car ) );

function* loadVehicles() {
  try {
    const vehicles = yield vehiclesAPI.getAllVehicles();
    const ensured = ensureUniqueItems( vehicles );
    const cleaned = yield enhanceItemsWithId( ensured );
    yield put( { type: types.LOAD_VEHICLES_SUCCESS, vehicles: cleaned } );
  } catch ( e ) {
    yield put( { type: types.LOAD_VEHICLES_FAILURE } );
  }
}

function* vehiclesSaga() {
  yield takeEvery( types.LOADING_VEHICLES, loadVehicles );
}

export default vehiclesSaga;
