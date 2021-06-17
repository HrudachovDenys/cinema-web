import { combineReducers } from 'redux';

import movieReducer, { STATE_KEY as MOVIE_STATE_KEY } from '../modules/movie/movieReducer';
import placeReducer, { STATE_KEY as PLACE_STATE_KEY } from '../modules/place/placeReducer';

export const reducers = combineReducers({
  [MOVIE_STATE_KEY]: movieReducer,
  [PLACE_STATE_KEY]: placeReducer,
});
