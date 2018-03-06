const sortOption = ( state = 'listing-newest', action ) => {
  switch ( action.type ) {
    case 'SET_SORT_OPTION':
      return action.sortOption;
    default:
      return state;
  }
};

export default sortOption;
