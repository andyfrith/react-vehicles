const visibilityFilter = ( state = 'SHOW_ALL', action ) => {
  switch ( action.type ) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const filterText = ( state = '', action ) => {
  switch ( action.type ) {
    case 'SET_FILTER_TEXT':
      return action.filterText;
    default:
      return state;
  }
};

export { visibilityFilter, filterText };
