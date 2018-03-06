import * as types from './actionTypes';

const setVisibilityFilter = filter => ( {
  type: types.SET_VISIBILITY_FILTER,
  filter,
} );

const setFilterText = filterText => ( {
  type: types.SET_FILTER_TEXT,
  filterText,
} );

export { setFilterText, setVisibilityFilter };
