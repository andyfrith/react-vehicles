import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

const styles = theme => ( {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  label: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  menu: {
    width: 200,
  },
  title: {
    margin: '25px 30px 25px 15px',
    fontSize: 14,
    fontWeight: 'bold',
    align: 'left',
    textTransform: 'uppercase',
    color: theme.palette.text.primary,
  },
  total: {
    fontSize: 20,
    color: theme.palette.text.secondary,
  },
} );

const sortOptions = [
  {
    value: 'year-newest',
    label: 'Year: Newest',
  },
  {
    value: 'year-oldest',
    label: 'Year: Oldest',
  },
  {
    value: 'mileage-highest',
    label: 'Mileage: Highest',
  },
  {
    value: 'mileage-lowest',
    label: 'Mileage: Lowest',
  },
  {
    value: 'listing-newest',
    label: 'Listing: Newest',
  },
  {
    value: 'listing-oldest',
    label: 'Listing: Oldest',
  },
];

class Sort extends React.Component {
  handleChange = ( event ) => {
    this.props.onSortByOptionChange( event.target.value );
  };

  render() {
    const { classes, sortByOption, matchTotal } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item sm={4}>
            <Typography className={classes.title}>
              <span className={classes.total}>{matchTotal}</span> Matches
            </Typography>
          </Grid>
          <Grid item sm={8}>
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="select-sort"
                select
                label="Sort By:"
                className={classes.textField}
                value={sortByOption}
                onChange={this.handleChange}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                InputLabelProps={{
                  className: classes.label,
                }}
                margin="normal"
              >
                {sortOptions.map( option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ) )}
              </TextField>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Sort.propTypes = {
  classes: PropTypes.object.isRequired,
  sortByOption: PropTypes.string.isRequired,
  onSortByOptionChange: PropTypes.func.isRequired,
  matchTotal: PropTypes.number.isRequired,
};

export default withStyles( styles )( Sort );
