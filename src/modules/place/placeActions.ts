const namespace = 'PLACE';
export const FETCH_PLACES_BY_MOVIE_ID = `${namespace}/FETCH_PLACES_BY_MOVIE_ID`;
export const TO_BOOK_PLACE = `${namespace}/TO_BOOK_PLACE`;
export const CANCEL_BOOKING = `${namespace}/CANCEL_BOOKING`;

/**
 * Fetch places by movie id.
 */
export const fetchPlacesByMovieId = (movieId: string) => ({
  type: FETCH_PLACES_BY_MOVIE_ID,
  payload: {
    request: {
      method: 'post',
      url: '/place/list',
      data: { _id: movieId },
    },
  },
});

/**
 * To book place.
 */
export const toBookPlace = (movieId: string, place: number, username: string) => ({
  type: TO_BOOK_PLACE,
  payload: {
    request: {
      method: 'post',
      url: '/place/to-book',
      data: { movieId, place, username },
    },
  },
});

/**
 * Cancel booking.
 */
export const cancelBooking = (_id: string) => ({
  type: CANCEL_BOOKING,
  payload: {
    request: {
      method: 'post',
      url: '/place/cancel-booking',
      data: { _id },
    },
  },
});
