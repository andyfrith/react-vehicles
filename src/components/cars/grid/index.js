import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ( {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
} );

function CarGrid( props ) {
  const { classes, cars } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {cars.map( car => (
          <Grid key={car.id} item xs={12}>
            <Paper className={classes.paper}>
              <img src={car.image_url} alt={car.make} />
            </Paper>
          </Grid>
        ) )}
      </Grid>
    </div>
  );
}

CarGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  cars: PropTypes.array.isRequired,
};

export default withStyles( styles )( CarGrid );
