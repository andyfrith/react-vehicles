import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
  paper: {
    margin: '10px 10px 10px 10px',
    textAlign: 'left',
  },
  message: {
    padding: '10px 10px 10px 10px',
  },
  header: {
    fontWeight: 'semi',
    fontSize: '18px',
  },
};

const Vehicles = props => (
  <div>
    {props.vehicles.map( vehicle => <div key={vehicle.id}>{vehicle.make}</div> )}
  </div>
);

Vehicles.propTypes = {
  vehicles: PropTypes.array.isRequired,
};

export default withStyles( styles, { withTheme: true } )( Vehicles );
