import { connect } from 'react-redux';
// import { toggleTodo } from '../actions';
import Vehicles from '../../components/vehicles';

const getVisibleVehicles = ( vehicles, filter ) => {
  switch ( filter ) {
    case 'SHOW_ALL':
      return vehicles.filter( v => v.make.toUpperCase() === 'NISSAN' );
    // case 'SHOW_COMPLETED':
    //   return vehicles.filter( t => t.completed );
    // case 'SHOW_ACTIVE':
    //   return vehicles.filter( t => !t.completed );
    default:
      throw new Error( `Unknown filter: ${ filter }` );
  }
};

const mapStateToProps = state => ( {
  vehicles: getVisibleVehicles( state.vehicles, state.visibilityFilter ),
} );

// const mapDispatchToProps = {
//   onTodoClick: toggleTodo,
// };

const VehiclesContainer = connect( mapStateToProps, null )( Vehicles );

export default VehiclesContainer;
