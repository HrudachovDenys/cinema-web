import qs from 'query-string';
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Places } from '../../place/containers/Places';

import { MoviesList } from '../containers/MoviesList';

const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.darkWhite};
`;

export const MoviesPage: React.FC = () => {
  const { search } = useLocation();
  const { movie: movieId } = qs.parse(search);

  return (
    <Wrapper>
      <MoviesList />
      <Places movieId={movieId as string} />
    </Wrapper>
  );
};
