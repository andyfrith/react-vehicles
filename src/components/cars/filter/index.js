import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import SearchIcon from 'material-ui-icons/Search';

const styles = theme => ( {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%',
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  label: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    width: 400,
  },
} );

class Filter extends React.Component {
  handleChange = ( event ) => {
    this.props.onFilterTextChange( event.target.value );
  };

  render() {
    const { classes, filterText } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <FormControl className={classes.formControl}>
          <Input
            placeholder="Filter vehicles by year, make and model"
            id="search"
            type="text"
            value={filterText}
            onChange={this.handleChange}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
    );
  }
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
  filterText: PropTypes.string.isRequired,
  onFilterTextChange: PropTypes.func.isRequired,
};

export default withStyles( styles )( Filter );
