import _ from 'lodash';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  clean,
  loadVehicles,
  selectVehicle,
  loadVehiclesFailure,
  loadVehiclesSuccess,
} from './vehicleActions';
import * as types from './actionTypes';

describe( 'Vehicle Actions', () => {
  it( 'should retrieve vehicles data and dispatch load vehicles success', () => {
    const middlewares = [ thunk ];
    const mockStore = configureMockStore( middlewares );
    const store = mockStore( { vehicles: {} } );
    const expectedActions = [
      { type: types.LOAD_VEHICLES_SUCCESS, vehicles: [] },
    ];

    return store.dispatch( loadVehicles() ).then( () => {
      expect( store.getActions().type ).toEqual( expectedActions.type );
    } );
  } );

  it( 'should create an action to signify sucessful load of vehicles data', () => {
    const vehicles = [];

    const expectedAction = {
      type: types.LOAD_VEHICLES_SUCCESS,
      vehicles,
    };
    expect( loadVehiclesSuccess( vehicles ) ).toEqual( expectedAction );
  } );

  it( 'should create an action to signify unsucessful load of vehicles data', () => {
    const expectedAction = {
      type: types.LOAD_VEHICLES_FAILURE,
      isFetching: false,
      message: 'LOAD_VEHICLES_DATA_UNSUCCESSFUL',
    };
    expect( loadVehiclesFailure( 'LOAD_VEHICLES_DATA_UNSUCCESSFUL' ) ).toEqual( expectedAction );
  } );

  it( 'should create an action to select a vehicle', () => {
    const vehicle = {};

    const expectedAction = {
      type: types.SELECT_VEHICLE,
      vehicle,
    };
    expect( selectVehicle( vehicle ) ).toEqual( expectedAction );
  } );
} );

describe( 'Vehicles Data Cleanup', () => {
  const data = [ { make: 'Acura' }, { make: 'Acura' }, { make: 'Audi' } ];
  const cleanedData = clean( data );

  it( 'should ensure no duplicates', () => {
    const hasDuplicates = ( a ) => {
      const counts = [];
      for ( let i = 0; i <= a.length; i += 1 ) {
        if ( counts[ a[ i ] ] === undefined ) {
          counts[ a[ i ] ] = 1;
        } else {
          return false;
        }
      }
      return true;
    };

    expect( hasDuplicates( cleanedData ) ).toBe( false );
  } );

  it( 'should ensure each vehicle has an id', () => {
    cleanedData.forEach( ( element ) => {
      expect( element.id ).toBeDefined();
    } );
  } );
} );
