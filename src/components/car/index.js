import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import ArrowBack from 'material-ui-icons/ArrowBack';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
import Img from 'react-image';
import { postedDate } from '../../utils';

const styles = {
  card: {
    margin: '0px 10px 10px 10px',
  },
  cardHeader: {
    background: 'lightgrey',
  },
  cardContent: {
    background: 'lightgrey',
  },
  media: {
    width: '100%',
    padding: 10,
  },
  link: {
    color: 'inherit',
  },
  paper: {
    margin: 10,
    padding: 10,
  },
  mileage: {
    fontWeight: 'bold',
  },
  posted: {
    fontWeight: 'bold',
  },
  progress: {
    margin: 10,
  },
};

const CarsLink = props => <Link to="/cars" {...props} />;
const PlaceHolderImg = (
  <Img className={styles.img} src="/car-placeholder.png" />
);

function Car( props ) {
  const { classes, car } = props;
  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Button component={CarsLink}>
            <ArrowBack className={classes.leftIcon} />
            Back to Vehicles
          </Button>
        </Paper>
        <Card className={classes.card}>
          <CardHeader
            className={classes.cardHeader}
            title={`${ car.year } ${ car.make } ${ car.model }`}
          />
          {/* <CardMedia
            className={classes.media}
            image={car.image_url}
            title={`${ car.year } ${ car.make } ${ car.model }`}
          /> */}
          <Img
            className={classes.media}
            src={[ car.image_url ]}
            loader={<CircularProgress className={classes.progress} />}
            unloader={PlaceHolderImg}
            title={`${ car.year } ${ car.make } ${ car.model }`}
          />
          <CardContent className={classes.cardContent}>
            <Typography component="p">
              <span className={classes.mileage}>Mileage: </span>
              {car.mileage}
            </Typography>
            <Typography component="p">
              <span className={classes.mileage}>Posted: </span>
              {postedDate( car.created_at )}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

Car.propTypes = {
  classes: PropTypes.object.isRequired,
  car: PropTypes.object.isRequired,
};

export default withStyles( styles )( Car );
