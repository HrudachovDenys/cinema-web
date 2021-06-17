import * as R from 'ramda';

import { getRestPayload } from '../../store/helpers';

import { FETCH_MOVIES } from './movieActions';

export const STATE_KEY = 'movie';

const initialState = {
  data: {},
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_MOVIES}_SUCCESS`: {
      const data = R.indexBy(R.prop('_id'), getRestPayload(action));

      return R.assoc('data', data, state);
    }
    default:
      return state;
  }
};

export const getMovies = R.compose(R.values, R.path([STATE_KEY, 'data']));

export const getMovieById = (state, movieId) => R.path([STATE_KEY, 'data', movieId], state);

export default movieReducer;
