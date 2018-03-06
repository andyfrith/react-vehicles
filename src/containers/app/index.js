import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../withRoot';
import { loadVehicles } from '../../actions/vehicleActions';
import Cars from '../cars';
import Car from '../car';

const styles = {
  root: {
    textAlign: 'center',
  },
};

class App extends React.Component {
  componentDidMount() {
    this.props.loadVehiclesConnect();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Route path="/" exact component={Cars} />
        <Route path="/cars" exact component={Cars} />
        <Route path="/car/:id" exact component={Car} />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  loadVehiclesConnect: PropTypes.func.isRequired,
};

const routedComp = withRouter( connect( null, { loadVehiclesConnect: loadVehicles } )( App ) );

export default withRoot( withStyles( styles, { withTheme: true } )( routedComp ) );
