import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import { postedDate } from '../../../utils';

const styles = theme => ( {
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    borderRadius: 0,
    width: 120,
    height: 90,
  },
  link: {
    color: 'transparent',
  },
  primary: {
    fontSize: '18px',
    fontWeight: 'semi',
  },
  secondary: {
    color: '#666',
  },
  mileage: {
    fontWeight: 'bold',
  },
  posted: {
    fontWeight: 'bold',
  },
} );

class CarList extends React.Component {
  handleClick = ( car, event ) => {
    this.props.onSelectedCarChange( car, event );
  };

  render() {
    const { classes, cars } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          {cars.map( car => (
            <Link
              className={classes.link}
              key={Math.random()}
              onClick={() => this.handleClick( car )}
              to={`/car/${ car.id }`}
            >
              <ListItem button divider>
                <Avatar
                  alt={`${ car.year } ${ car.make } ${ car.model }`}
                  className={classes.avatar}
                  src="/car-placeholder.png"
                />
                <ListItemText
                  disableTypography
                  primary={
                    <Typography type="body2" className={classes.primary}>
                      {`${ car.year } ${ car.make } ${ car.model }`}
                    </Typography>
                  }
                  // primary={`${ car.year } ${ car.make } ${ car.model }`}
                  secondary={
                    <Typography type="body2" className={classes.secondary}>
                      <span className={classes.mileage}>Mileage:</span>{' '}
                      {car.mileage}
                      <br />
                      <span className={classes.posted}>Posted:</span>{' '}
                      {postedDate( car.created_at )}
                    </Typography>
                  }
                  // secondary={`Mileage: ${ car.mileage } Posted: ${ postedDate( car.created_at ) }`}
                />
              </ListItem>
            </Link>
          ) )}
        </List>
      </div>
    );
  }
}

CarList.propTypes = {
  classes: PropTypes.object.isRequired,
  cars: PropTypes.array.isRequired,
  onSelectedCarChange: PropTypes.func.isRequired,
};

export default withStyles( styles )( CarList );
