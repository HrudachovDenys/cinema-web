import * as R from 'ramda';
import { FETCH_PLACES_BY_MOVIE_ID, TO_BOOK_PLACE, CANCEL_BOOKING } from './placeActions';

import { getRestPayload } from '../../store/helpers';

export const STATE_KEY = 'place';

const initialState = {
  data: {},
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_PLACES_BY_MOVIE_ID}_SUCCESS`: {
      const data = R.indexBy(R.prop('_id'), getRestPayload(action));

      return R.assoc('data', data, state);
    }
    case `${TO_BOOK_PLACE}_SUCCESS`: {
      const place = getRestPayload(action);

      return R.assocPath(['data', place._id], place, state);
    }
    case `${CANCEL_BOOKING}_SUCCESS`: {
      const place = getRestPayload(action);

      return R.dissocPath(['data', place._id], state);
    }
    default:
      return state;
  }
};

export const getPlacesByMovieId = (state, movieId) =>
  R.compose(
    R.filter(place => place.movieId === movieId),
    R.values,
    R.path([STATE_KEY, 'data']),
  )(state);

export default placeReducer;
