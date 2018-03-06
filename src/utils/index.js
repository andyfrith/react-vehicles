import _ from 'lodash';
import moment from 'moment';
import v4 from 'node-uuid';

const makes = cars => _.uniqBy( cars, 'make' );
const models = cars => _.uniqBy( cars, 'model' );

const cleanCars = ( cars ) => {
  const uniqueCars = _.uniqWith( cars, _.isEqual );
  return _.map( uniqueCars, car => _.extend( { id: v4() }, car ) );
};

const selectCar = ( cars, id ) => _.find( cars, { id } );

const sortCars = ( cars, sortField ) => {
  switch ( sortField ) {
    case 'year-newest':
      return _.orderBy( cars, [ 'year' ], [ 'desc' ] );

    case 'year-oldest':
      return _.orderBy( cars, [ 'year' ], [ 'asc' ] );

    case 'mileage-lowest':
      return _.orderBy( cars, [ 'mileage' ], [ 'asc' ] );

    case 'mileage-highest':
      return _.orderBy( cars, [ 'mileage' ], [ 'desc' ] );

    case 'listing-newest':
      return _.sortBy( cars, car => moment.utc( car.created_at ) ).reverse();

    case 'listing-oldest':
      return _.sortBy( cars, car => moment.utc( car.created_at ) );

    default:
      return cars;
  }
};

const filterCars = ( cars, filterText ) => {
  // const tokens = filterText.toUpperCase().split( ' ' );

  // const filteredCars = _.filter(
  //   this.state.cars,
  //   car =>
  //     tokens.includes( car.year.toString() ) ||
  //     tokens.includes( car.make.toUpperCase() ) ||
  //     tokens.includes( car.model.toUpperCase() ),
  //   filterText,
  // );

  const filteredCars = _.filter(
    cars,
    car =>
      car.year.toString().indexOf( filterText.toUpperCase().trim() ) > -1 ||
      car.make.toUpperCase().indexOf( filterText.toUpperCase().trim() ) > -1 ||
      car.model.toUpperCase().indexOf( filterText.toUpperCase().trim() ) > -1 ||
      car.year
        .toString()
        .concat( ' ' )
        .concat( car.model.toUpperCase() )
        .indexOf( filterText.toUpperCase().trim() ) > -1 ||
      car.year
        .toString()
        .concat( ' ' )
        .concat( car.make.toUpperCase() )
        .indexOf( filterText.toUpperCase().trim() ) > -1 ||
      car.year
        .toString()
        .concat( ' ' )
        .concat( car.make.toUpperCase() )
        .concat( ' ' )
        .concat( car.model.toUpperCase() )
        .indexOf( filterText.toUpperCase().trim() ) > -1 ||
      car.year
        .toString()
        .concat( ' ' )
        .concat( car.model.toUpperCase() )
        .concat( ' ' )
        .concat( car.make.toUpperCase() )
        .indexOf( filterText.toUpperCase().trim() ) > -1 ||
      car.make
        .toUpperCase()
        .concat( ' ' )
        .concat( car.model.toUpperCase() )
        .indexOf( filterText.toUpperCase().trim() ) > -1 ||
      car.make
        .toUpperCase()
        .concat( ' ' )
        .concat( car.year.toString() )
        .indexOf( filterText.toUpperCase().trim() ) > -1 ||
      car.make
        .toUpperCase()
        .concat( ' ' )
        .concat( car.model.toUpperCase() )
        .concat( ' ' )
        .concat( car.year.toString() )
        .indexOf( filterText.toUpperCase().trim() ) > -1 ||
      car.model
        .toUpperCase()
        .concat( ' ' )
        .concat( car.make.toUpperCase() )
        .indexOf( filterText.toUpperCase().trim() ) > -1 ||
      car.model
        .toUpperCase()
        .concat( ' ' )
        .concat( car.year.toString() )
        .indexOf( filterText.toUpperCase().trim() ) > -1 ||
      car.model
        .toUpperCase()
        .concat( ' ' )
        .concat( car.make.toUpperCase() )
        .concat( ' ' )
        .concat( car.year.toString() )
        .indexOf( filterText.toUpperCase().trim() ) > -1,
    filterText,
  );

  return filteredCars;
};

const postedDate = date => moment.utc( date ).format( 'MMM, DD YYYY - h:mm a' );

export {
  cleanCars,
  sortCars,
  filterCars,
  postedDate,
  makes,
  models,
  selectCar,
};
