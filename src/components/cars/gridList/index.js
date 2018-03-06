import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';

const styles = theme => ( {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000, // 500
    height: 900, // 450
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
} );

/*
 {
    "year" : 2013,
    "make" : "Kia",
    "model" : "Optima",
    "mileage" : 24235,
    "drivetrain" : "FWD",
    "bodytype" : "sedan",
    "image_url" : "http://www.optimaforums.com/forum/attachments/new-member-introductions/11137d1347548855-new-2013-kia-optima-sx-l-titanium-photo.jpg",
    "created_at" : "2016-10-14T20:13:22.586Z"
  },
  */

function CarGridList( props ) {
  const { classes, cars } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {cars.map( car => (
          <GridListTile key={car.id}>
            <img src="/car-placeholder.png" alt={car.make} />
            <GridListTileBar
              title={`${ car.year } ${ car.make } ${ car.model }`}
              subtitle={<span>mileage: {car.mileage}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ) )}
      </GridList>
    </div>
  );
}

CarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  cars: PropTypes.array.isRequired,
};

export default withStyles( styles )( CarGridList );
