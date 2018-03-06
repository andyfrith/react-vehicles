import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

const styles = theme => ( {
  root: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem( 15 ),
    fontWeight: theme.typography.fontWeightRegular,
  },
} );

function SearchFilters( props ) {
  const { makesModels, classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Make</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormGroup>
            {makesModels.map( car => (
              <FormControlLabel
                key={car.id}
                control={<Checkbox checked={false} value={car.make} />}
                label={car.make}
              />
            ) )}
          </FormGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Model</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormGroup>
            {makesModels.map( car => (
              <FormControlLabel
                key={car.id}
                control={<Checkbox checked={false} value={car.model} />}
                label={car.model}
              />
            ) )}
          </FormGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SearchFilters.propTypes = {
  classes: PropTypes.object.isRequired,
  makesModels: PropTypes.array.isRequired,
};

export default withStyles( styles )( SearchFilters );
