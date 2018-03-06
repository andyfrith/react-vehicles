import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import List from './list';
import Filter from './filter';
// import AppliedFilters from '../appliedFilters';
// import SearchFilters from '../searchFilters';
import Sort from './sort';

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

const Cars = props => (
  <Grid container spacing={0}>
    <Grid item xs={12}>
      <Paper className={props.classes.paper}>
        <Filter
          filterText={props.filterText}
          onFilterTextChange={props.onFilterTextChange}
        />
      </Paper>
    </Grid>
    {/* <Grid item sm={4} xs={12}>
      <Paper className={props.classes.paper}>
        <SearchFilters makesModels={[]} />
      </Paper>
    </Grid> */}
    <Grid item sm={12} xs={12}>
      {/* <Paper className={props.classes.paper}>
        <AppliedFilters />
      </Paper> */}
      <Paper className={props.classes.paper}>
        <Sort
          sortByOption={props.sortOption}
          onSortByOptionChange={props.onSortOptionChange}
          matchTotal={props.cars.length}
        />
      </Paper>
      <Paper className={props.classes.paper}>
        {props.cars.length === 0 ? (
          <div className={props.classes.message}>
            <Typography component="p" className={props.classes.header}>
              No cars match the filter.
            </Typography>
            <Typography component="p">Please modify your filter.</Typography>
          </div>
        ) : (
          <List
            cars={props.cars}
            selectedCar={props.selectedCar}
            onSelectedCarChange={props.onSelectedCarChange}
          />
        )}
      </Paper>
    </Grid>
  </Grid>
);

Cars.propTypes = {
  classes: PropTypes.object.isRequired,
  cars: PropTypes.array.isRequired,
  filterText: PropTypes.string.isRequired,
  onFilterTextChange: PropTypes.func.isRequired,
  sortOption: PropTypes.string.isRequired,
  onSortOptionChange: PropTypes.func.isRequired,
  selectedCar: PropTypes.object.isRequired,
  onSelectedCarChange: PropTypes.func.isRequired,
};

export default withStyles( styles, { withTheme: true } )( Cars );
