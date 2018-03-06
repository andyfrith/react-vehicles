import { combineReducers } from 'redux';
import vehicles from './vehicleReducer';
import selectedVehicle from './selectedVehicleReducer';
import { visibilityFilter, filterText } from './visibilityFilterReducer';
import sortOption from './sortOptionReducer';

const reducers = combineReducers( {
  vehicles,
  selectedVehicle,
  visibilityFilter,
  filterText,
  sortOption,
} );

export default reducers;
