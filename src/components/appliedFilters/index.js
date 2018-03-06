import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Chip from 'material-ui/Chip';
import Typography from 'material-ui/Typography';

const styles = theme => ( {
  root: {
    display: 'flex',
    justifyContent: 'left',
  },
  chip: {
    margin: theme.spacing.unit,
  },
  title: {
    margin: 15,
    fontSize: 14,
    fontWeight: 'bold',
    align: 'left',
    textTransform: 'uppercase',
    color: theme.palette.text.primary,
  },
} );

function handleDelete() {}

function handleClick() {}

function AppliedFilters( props ) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Applied Filters:</Typography>
      <Chip
        label="Car Make"
        onClick={handleClick}
        onDelete={handleDelete}
        className={classes.chip}
      />
      <Chip
        label="Car Model"
        onClick={handleClick}
        onDelete={handleDelete}
        className={classes.chip}
      />
    </div>
  );
}

AppliedFilters.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles( styles )( AppliedFilters );
