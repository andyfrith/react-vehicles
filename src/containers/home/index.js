import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import {
  setVisibilityFilter,
  setFilterText,
} from '../../actions/filterActions';
import Filter from '../../components/cars/filter';
import Welcome from '../../components/welcome';

const styles = theme => ( {
  root: {},
  link: {
    color: 'transparent',
  },
} );

class HomeContainer extends React.Component {
  onFilterTextChange = ( filterText ) => {
    if ( filterText === '' ) {
      this.props.setVisibilityFilterConnect( 'SHOW_ALL' );
    } else {
      this.props.setVisibilityFilterConnect( 'SHOW_FILTERED' );
    }
    this.props.setFilterTextConnect( filterText );
  };

  render() {
    const { classes, filterText } = this.props;
    return (
      <div>
        <Welcome />
        <Filter
          filterText={filterText}
          onFilterTextChange={this.onFilterTextChange}
        />
        <Link className={classes.link} to="/cars/">
          <Typography type="body2" className={classes.primary}>
            Show Cars
          </Typography>
        </Link>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  filterText: PropTypes.string.isRequired,
  setFilterTextConnect: PropTypes.func.isRequired,
  setVisibilityFilterConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ( {
  filterText: state.filterText,
} );

const connectedComp = connect( mapStateToProps, {
  setVisibilityFilterConnect: setVisibilityFilter,
  setFilterTextConnect: setFilterText,
} )( HomeContainer );

export default withStyles( styles, { withTheme: true } )( connectedComp );

// export default withStyles( styles )( connect( mapStateToProps, {
//   setVisibilityFilterConnect: setVisibilityFilter,
//   setFilterTextConnect: setFilterText,
// } ) )( HomeContainer );
