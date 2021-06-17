const namespace = 'MOVIE';
export const FETCH_MOVIES = `${namespace}/FETCH_MOVIES`;

/**
 * Fetch all movies.
 */
export const fetchMovies = () => ({
  type: FETCH_MOVIES,
  payload: {
    request: {
      url: '/movie/list',
    },
  },
});
