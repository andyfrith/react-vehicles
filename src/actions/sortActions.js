import * as types from './actionTypes';

const setSortOption = sortOption => ( {
  type: types.SET_SORT_OPTION,
  sortOption,
} );

export default setSortOption;
