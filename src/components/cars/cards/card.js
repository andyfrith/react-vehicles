import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';

const styles = theme => ( {
  root: {
    margin: '10px 10px 10px 10px',
  },
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
    margin: 10,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
} );

function CarCards( props ) {
  const { classes, theme, car } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image="/car-placeholder.png"
          title={`${ car.year } ${ car.make } ${ car.model }`}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">
              {`${ car.year } ${ car.make } ${ car.model }`}
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              {`Mileage: ${ car.mileage }`}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="Previous">
              {theme.direction === 'rtl' ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            <IconButton aria-label="Play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="Next">
              {theme.direction === 'rtl' ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </div>
        </div>
      </Card>
    </div>
  );
}

CarCards.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  car: PropTypes.object.isRequired,
};

export default withStyles( styles, { withTheme: true } )( CarCards );
