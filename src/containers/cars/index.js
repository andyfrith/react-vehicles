import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';
import { selectVehicle } from '../../actions/vehicleActions';
import {
  setVisibilityFilter,
  setFilterText,
} from '../../actions/filterActions';
import setSortOption from '../../actions/sortActions';
import Cars from '../../components/cars';
import { filterCars, sortCars } from '../../utils';

class CarsContainer extends React.Component {
  onFilterTextChange = ( filterText ) => {
    if ( filterText === '' ) {
      this.props.setVisibilityFilterConnect( 'SHOW_ALL' );
    } else {
      this.props.setVisibilityFilterConnect( 'SHOW_FILTERED' );
    }
    this.props.setFilterTextConnect( filterText );
  };

  onSortOptionChange = ( sortOption ) => {
    this.props.setSortOptionConnect( sortOption );
  };

  onSelectedCarChange = ( selectedCar ) => {
    this.props.selectVehicleConnect( selectedCar );
  };

  render() {
    if ( this.props.error !== '' ) {
      return <div>Error: {this.props.error}</div>;
    }

    if ( this.props.isFetching ) {
      return <CircularProgress />;
    }

    return (
      <Cars
        cars={this.props.vehicles}
        filterText={this.props.filterText}
        onFilterTextChange={this.onFilterTextChange}
        sortOption={this.props.sortOption}
        onSortOptionChange={this.onSortOptionChange}
        selectedCar={this.props.selectedVehicle}
        onSelectedCarChange={this.onSelectedCarChange}
      />
    );
  }
}

CarsContainer.propTypes = {
  vehicles: PropTypes.array.isRequired,
  sortOption: PropTypes.string.isRequired,
  filterText: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  selectedVehicle: PropTypes.object.isRequired,
  setVisibilityFilterConnect: PropTypes.func.isRequired,
  setFilterTextConnect: PropTypes.func.isRequired,
  selectVehicleConnect: PropTypes.func.isRequired,
  setSortOptionConnect: PropTypes.func.isRequired,
};

const getVisibleVehicles = ( vehicles, filter, filterText, sortOption ) => {
  switch ( filter ) {
    case 'SHOW_ALL':
      return sortCars( vehicles, sortOption );
    case 'SHOW_FILTERED':
      return sortCars( filterCars( vehicles, filterText ), sortOption );
    default:
      throw new Error( `Unknown filter: ${ filter }` );
  }
};

const mapStateToProps = state => ( {
  vehicles: getVisibleVehicles(
    state.vehicles.vehicles,
    state.visibilityFilter,
    state.filterText,
    state.sortOption,
  ),
  filterText: state.filterText,
  sortOption: state.sortOption,
  selectedVehicle: state.selectedVehicle,
  isFetching: state.vehicles.isFetching,
  error: state.vehicles.error,
} );

export default connect( mapStateToProps, {
  setVisibilityFilterConnect: setVisibilityFilter,
  selectVehicleConnect: selectVehicle,
  setFilterTextConnect: setFilterText,
  setSortOptionConnect: setSortOption,
} )( CarsContainer );
