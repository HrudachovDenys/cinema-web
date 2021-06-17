import qs from 'query-string';
import * as R from 'ramda';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';

import * as movieActions from '../movieActions';
import { getMovies } from '../movieReducer';
import { MovieModel } from '../models/movie';
import { MovieCard } from '../components/MovieCard';

const Wrapper = styled.div`
  min-width: 13%;
  height: 100vh;
  padding: 20px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const MoviesList: React.FC = () => {
  const history = useHistory();
  const { search } = useLocation();
  const { movie: movieId } = qs.parse(search);

  const movies: MovieModel[] = useSelector(getMovies);

  const dispatch = useDispatch();

  // Fetch movies.
  useEffect(() => {
    dispatch(movieActions.fetchMovies());
  }, [dispatch]);

  // Set default selected movie.
  useEffect(() => {
    if (!movieId && movies.length) {
      history.push(`?${qs.stringify({ movie: R.prop('_id', R.head(movies)) })}`);
    }
  }, [movies, movieId, history]);

  return (
    <Wrapper>
      {movies.map(movie => (
        <Link key={movie._id} to={`/?${qs.stringify({ movie: movie._id })}`}>
          <MovieCard selected={movie._id === movieId} name={movie.name} image={movie.image} />
        </Link>
      ))}
    </Wrapper>
  );
};
