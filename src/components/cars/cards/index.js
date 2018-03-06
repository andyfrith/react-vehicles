import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Card from './card';

const styles = theme => ( {
  root: {
    width: '100%',
    // backgroundColor: theme.palette.background.paper,
  },
  link: {
    color: 'transparent',
  },
} );

class CarCards extends React.Component {
  handleClick = ( car, event ) => {
    this.props.onSelectedCarChange( car, event );
  };

  render() {
    const { classes, cars } = this.props;

    return (
      <div className={classes.root}>
        {cars.map( car => <Card key={car.id} car={car} /> )}
      </div>
    );
  }
}

CarCards.propTypes = {
  classes: PropTypes.object.isRequired,
  cars: PropTypes.array.isRequired,
  onSelectedCarChange: PropTypes.func.isRequired,
};

export default withStyles( styles )( CarCards );
