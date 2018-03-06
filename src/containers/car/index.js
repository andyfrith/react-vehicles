import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Car from '../../components/car';

const CarContainer = ( { match, selectedVehicle } ) => (
  <Car car={selectedVehicle} />
);

CarContainer.propTypes = {
  selectedVehicle: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ( {
  selectedVehicle: state.selectedVehicle,
} );

export default connect( mapStateToProps )( CarContainer );
